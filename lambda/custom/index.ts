'use strict';

import { BCOVPlayer } from 'brightcove-player-sdk-alexa';

import { BCOVPlaybackServiceData } from 'brightcove-player-sdk-alexa';

const playbackConfigCacel = {
    accountId: '6023583686001',
    policyKey:
        'BCpkADawqM1-1rD_OJ6JEN1ePBVItZjLyHZyRW44CH7oTabM88TJpgmrwUfhGk0C9a3y6un5yNyBqncslG5qTG8GOv-3TKSaMx2x8dYTlag2ZEB2C5T2Eu4thtR7Zn_04R8AwLSdJgWOtFp4',
    videoId: '6040771423001',
};

const data: BCOVPlaybackServiceData = {
    accountId: playbackConfigCacel.accountId,
    policyKey: playbackConfigCacel.policyKey
}

const app = new BCOVPlayer(data);

export let handler = app.getLambda();   