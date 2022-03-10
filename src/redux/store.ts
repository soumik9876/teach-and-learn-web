import {createStore, applyMiddleware, combineReducers, Middleware, Store} from "redux";
import {createWrapper, HYDRATE} from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import authReducer, {AuthState} from "./auth/reducer";
import {persistReducer, persistStore} from "redux-persist"
import {PersistGate as _PersistGate} from "redux-persist/integration/react"

export type RootState = {
    auth: AuthState;
}

//COMBINING ALL REDUCERS
const combinedReducer = combineReducers({
    auth: authReducer,
    // OTHER REDUCERS WILL BE ADDED HERE
});

export interface PersistStore extends Store {
    __persistor?: any
}

const reducer = (state: any, action: any) => {
    return combinedReducer(state, action)
}

// BINDING MIDDLEWARE
const bindMiddleware = (middleware: Middleware[]) => {
    if (process.env.NODE_ENV !== "production") {
        const {composeWithDevTools} = require("redux-devtools-extension");
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};
let store: PersistStore;
const makeStore = ({req}: any) => {
    const isServer = typeof window == "undefined";
    if (isServer) {
        //If it's on server side, create a store
        return createStore(reducer, bindMiddleware([thunkMiddleware]));
    } else {
        //If it's on client side, create a store which will persist
        const {persistStore, persistReducer} = require("redux-persist");
        const storage = require("redux-persist/lib/storage").default;

        const persistConfig = {
            key: "teach-and-learn-web",
            whitelist: ["auth"], // only counter will be persisted, add other reducers if needed
            storage, // if needed, use a safer storage
        };

        const persistedReducer = persistReducer(persistConfig, reducer); // Create a new reducer with our existing reducer

        store = createStore(
            persistedReducer,
            bindMiddleware([thunkMiddleware])
        ); // Creating the store again

        store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

        return store;
    }
};

// Export the wrapper & wrap the pages/_app.js with this wrapper only
export const wrapper = createWrapper<PersistStore>(makeStore);
export const PersistGate = _PersistGate

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}

export type AppDispatch = typeof store.dispatch