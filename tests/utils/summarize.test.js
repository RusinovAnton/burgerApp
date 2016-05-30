var equal = require('chai').assert.equal;

import summarize from '../../app/utils/summarize';

describe('summarize(key, obj)', function(){
    it('', function(){
        const mockObj = {
            size: {
                cost: 10,
                cal: 22
            },
            stuff: {
                cost: 10,
                cal: 23
            },
            topp: {
                cost: 10,
                cal: 24
            }
        };
        const mockArr = [
            {
                cost: 10,
                cal: 22
            },
            [
                {
                    cost: 10,
                    cal: 23
                },
                {
                    cost: 10,
                    cal: 31
                }
            ],
            {
                cost: 10,
                cal: 24
            }
        ];

        equal(summarize('cost', mockObj), 30);
        equal(summarize('cal', mockArr), 100);

    });
});
