import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {

        doubleCounter: state => {
            // 裡面放的是物件(這個東西要再component內可以被存取)
            return state.counter * 2
        },
        // property
        stringCounter: state => {
            return state.counter + ' Clicks'
        }
    },
    // mutation改變state(mutation一定是synchronous的，因為是立即變化)
    mutations: {
        increment: (state, payload) => {
            state.counter += payload
        },
        decrement: (state, payload) => {
            state.counter -= payload
        }
    },
    // action是commit mutaion之前的東西，趁mutation之前用action做一些asynchronous的事情
    actions: {
        // context是由vuex傳過來的，讓我們可以存取commit method
        // increment: context => {
        //     context.commit('increment')
        // }
        // 另種寫法(利用destruction)
        increment: ({ commit }, payload) => {
            commit('increment', payload)
        },
        decrement: ({ commit }, payload) => {
            commit('decrement', payload)
        },
        asyncIncrement: ({ commit }, payload) => {
            setTimeout(() => {
                commit('increment', payload.by)
            }, payload.duration)
        },
        asyncDecrement: ({ commit }, payload) => {
            setTimeout(() => {
                commit('decrement', payload.by)
            }, payload.duration)
        }
    }

})

