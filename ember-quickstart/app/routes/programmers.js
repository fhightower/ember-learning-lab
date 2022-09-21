import Route from '@ember/routing/route';

const myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code.
  // In reality, you will probably be using something like XHR or an HTML API.
  setTimeout(() => {
    resolve(["a", "b"]); // Yay! Everything went well!
  }, 2500);
});

export default class ProgrammersRoute extends Route {
    model() {
        return myFirstPromise;
    }
}
