import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDAXjXo-uZNqrDMqwgRbb7-bKIVQbN6IJE',
  authDomain: 'platzi-rooms-5ebd8.firebaseapp.com',
  databaseURL: 'https://platzi-rooms-5ebd8-default-rtdb.firebaseio.com',
  projectId: 'platzi-rooms-5ebd8',
  storageBucket: 'platzi-rooms-5ebd8.appspot.com',
  messagingSenderId: '671111740990',
  appId: '1:671111740990:web:a30df71b4950497b731b6f',
  measurementId: 'G-D8N471PQRX',
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch('FETCH_AUTH_USER');
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    this.$store.dispatch('FETCH_ROOMS', { id: store.state.authId });
  },
}).$mount('#app');
