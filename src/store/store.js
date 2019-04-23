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
    // mutation改變state
    mutations: {
        increment: state => {
            state.counter++
        },
        decrement: state => {
            state.counter--
        }
    }
})

