const EventEmitter = require('events');

// const emitter = new EventEmitter();
//
// emitter.on('anything', (data) => {
//   console.log('ON anything: ', data)
// });
//
// emitter.emit('anything', {a: 1, b: 2});
// emitter.emit('anything', {c: 3, d: 4});
//
// setTimeout( () => {
//   emitter.emit('anything', {e: 5, f: 6});
// }, 500);

class Dispatcher extends EventEmitter {
  subscribe(eventName, cb) {
    console.log('subscribe...');
    this.on(eventName, cb);
  }

  dispatch(eventName, data) {
    console.log('Dispatching: ');
    this.emit(eventName, data)
  }
}

const dispatch = new Dispatcher();

dispatch.subscribe('myEvent1', data => {
  console.log('On myEvent1: ', data)
});

dispatch.dispatch('myEvent1', {aa: 11});

dispatch.dispatch('myEvent1', {aa: 22});

dispatch.dispatch('myEvent1', {aa: 33});