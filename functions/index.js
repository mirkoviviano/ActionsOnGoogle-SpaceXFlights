// Copyright 2018, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const {
  dialogflow,
  BasicCard,
  Image,
  SimpleResponse
} = require('actions-on-google');
const functions = require('firebase-functions');
const fetch = require('isomorphic-fetch');
const dateFormat = require('dateformat');

const URL = 'https://api.spacexdata.com/v3/launches/next';

const app = dialogflow({debug: true});

// Retrieve data from the external API.
app.intent('space flights', (conv) => {
  // Note: Moving this fetch call outside of the app intent callback will
  // cause it to become a global var (i.e. it's value will be cached across
  // function executions).
  return fetch(URL)
    .then((response) => {
      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText);
      } else {
        return response.json();
      }
    })
    .then((next_flight) => {
        conv.close(new SimpleResponse({
            text: next_flight.info,
            speech: `The next flight by SpaceX will be "${next_flight.mission_name}", mission numer ${next_flight.flight_number}, on the ${dateFormat(next_flight.launch_date_utc,"dd-mm-yyyy h:mtt")}. It will fly on a ${next_flight.rocket.rocket_name} rocket.`,
        }));
        if (conv.screen) {
            conv.close(new BasicCard({
                text: next_flight.details,
                title: `${next_flight.mission_name} - ${next_flight.flight_number}`
            }));
        }
    });
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);