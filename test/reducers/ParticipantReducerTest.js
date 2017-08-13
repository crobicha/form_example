var reducer = require('../../src/reducers/ParticipantReducer');

describe('ParticipantReducer', () => {

  it('should not change the passed state', (done) => {

    const state = Object.freeze({});
    reducer(state, {type: 'INVALID'});

    done();
  });
});
