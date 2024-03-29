# Actions on Google: SpaceX Flights

This is a simple Action on Google to learn about the next SpaceX Flight. It uses the [Node.js client library](https://github.com/actions-on-google/actions-on-google-nodejs) and [Firebase Hosting](https://firebase.google.com/docs/hosting).

The Action is listed on the [Google Assistant Directory](https://assistant.google.com/services/a/uid/00000090a74c3d54) - leave a review if you like it.

You can interact with the deployed Action on 
+ Android 6.0+ watches
+ Android 6.0+ TVs
+ Google Home
+ Android 5.0+ phones
+ iOS 10.0+ devices
+ Headphones
+ Smart Displays
+ Android 6.0+ tablets
by saying 
```
Ok Google, can I talk to SpaceX Flights?
```
or
```
Ok Google, I want to talk to SpaceX Flights.
```
or 
```
Ok Google, let me talk to SpaceX Flights.
```

More details on [Google Assistant Directory](https://assistant.google.com/services/a/uid/00000090a74c3d54).

### Enable Billing
**Required for running this sample**
This sample uses Firebase Cloud Functions to make an HTTP request to a non-Google service. The free Firebase Spark Plan only allows outbound network calls to Google services. If you plan to run the sample, you will need to temporarily upgrade to a Firebase plan that allows for outbound networking, such as the [Blaze Plan](https://firebase.google.com/pricing/), also called Pay as you go.

## Setup Instructions
### Prerequisites
1. Node.js and NPM
   + We recommend installing using [NVM](https://github.com/creationix/nvm)
1. Install the [Firebase CLI](https://developers.google.com/actions/dialogflow/deploy-fulfillment)
   + We recommend using version 6.5.0, `npm install -g firebase-tools@6.5.0`
   + Run `firebase login` with your Google account

### Configuration
#### Actions Console
1. From the [Actions on Google Console](https://console.actions.google.com/), New project (this will be your *Project ID*) > **Create project** > under **More options** > **Conversational**
1. From the top menu under **Develop** > **Actions** (left nav) > **Add your first action** > **BUILD** (this will bring you to the Dialogflow console) > Select language and time zone > **CREATE**.
1. In the Dialogflow console, go to **Settings** ⚙ > **Export and Import** > **Restore from zip** using the `SpaceXFlights.zip` in this sample's directory.

#### Firebase Deployment
1. On your local machine, in the `functions` directory, run `npm install`
1. Run `firebase deploy --project {PROJECT_ID}` to deploy the function
   + To find your **Project ID**: In [Dialogflow console](https://console.dialogflow.com/) under **Settings** ⚙ > **General** tab > **Project ID**.

#### Dialogflow Console
1. Return to the [Dialogflow Console](https://console.dialogflow.com) > select **Fulfillment** > **Enable** Webhook > Set **URL** to the **Function URL** that was returned after the deploy command > **SAVE**.
   ```
   Function URL (dialogflowFirebaseFulfillment): https://${REGION}-${PROJECT_ID}.cloudfunctions.net/dialogflowFirebaseFulfillment
   ```
1. From the left navigation menu, click **Integrations** > **Integration Settings** under Google Assistant > Enable **Auto-preview changes** >  **Test** to open the Actions on Google simulator then say or type `Talk to my test app`.

### Running this Sample
+ You can test your Action on any Google Assistant-enabled device on which the Assistant is signed into the same account used to create this project. Just say or type, “OK Google, talk to my test app”.
+ You can also use the Actions on Google Console simulator to test most features and preview on-device behavior.

## References & Issues
+ Questions? Go to [StackOverflow](https://stackoverflow.com/questions/tagged/actions-on-google), [Assistant Developer Community on Reddit](https://www.reddit.com/r/GoogleAssistantDev/) or [Support](https://developers.google.com/actions/support/).
+ For bugs, please report an issue on Github.
+ Actions on Google [Documentation](https://developers.google.com/actions/extending-the-assistant)
+ Actions on Google [Codelabs](https://codelabs.developers.google.com/?cat=Assistant)
+ [Webhook Boilerplate Template](https://github.com/actions-on-google/dialogflow-webhook-boilerplate-nodejs) for Actions on Google

## Make Contributions
Please read and follow the steps in the [CONTRIBUTING.md](CONTRIBUTING.md).

## License
See [LICENSE](LICENSE).

## Terms
Your use of this sample is subject to, and by using or downloading the sample files you agree to comply with, the [Google APIs Terms of Service](https://developers.google.com/terms/).
