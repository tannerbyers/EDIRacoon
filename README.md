# EDI RACOON

## Installation
1. Clone the repository.
2. Install dependencies by running `npm install`.
3. Set up your AWS account in [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)
4. Copy the `.env_example` files as `.env` and set them to your accounts (IN FRONTEND AND BACKEND).
5. Customize the application to your needs.


## Deployment
1. `npm run deploy`

## Local Development
1. `npm run local`
2. you can also cd into the Frontend folder and start it.

## Recommendations
1. Highly recommend setting up [AWS budgets](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-create.html) for whatever you're comfortable spending. This should all fall under their free tier but it scale and charge to meet user needs.
2. 
## To-Do for OSC

The following tasks need to be completed:

- Add Subscription with Stripe: Add a subscription service using Stripe.
  - Add authentication with routes and subscriptions
- An Easy Way to Set Themes: Add an easy way to set themes.
- CICD Setup: Set up continuous integration and continuous deployment with CodePipeline.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
