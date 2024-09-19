const PricingPage= () => {
  return (
    <div className="pricing-page">
      <h1 className="text-center text-4xl font-bold">Pricing</h1>
      <p className="text-center text-lg mt-4">Choose the plan that fits your business needs.</p>
      
      <div className="pricing-table mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Entry Plan */}
        <div className="pricing-card p-6 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-bold text-center">Entry</h2>
          <p className="text-center text-2xl font-bold mt-4">$25/month</p>
          <ul className="mt-4 space-y-2">
            <li>100,000 transactions per month</li>
            <li>25 GB of hot/warm storage</li>
            <li>50 GB of cold storage</li>
            <li>Additional storage: $0.015/GB (Hot/Warm), $0.005/GB (Cold)</li>
            <li>Additional transactions: $1.00 per 1,000</li>
            <li>Cold data query: $0.01 per query</li>
            <li>Option to enable data deletion</li>
          </ul>
        </div>

        {/* Growth Plan */}
        <div className="pricing-card p-6 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-bold text-center">Growth</h2>
          <p className="text-center text-2xl font-bold mt-4">$50/month</p>
          <ul className="mt-4 space-y-2">
            <li>250,000 transactions per month</li>
            <li>50 GB of hot/warm storage</li>
            <li>100 GB of cold storage</li>
            <li>Additional storage: $0.015/GB (Hot/Warm), $0.005/GB (Cold)</li>
            <li>Additional transactions: $1.00 per 1,000</li>
            <li>Cold data query: $0.01 per query</li>
            <li>Option to enable data deletion</li>
          </ul>
        </div>

        {/* Pro Plan */}
        <div className="pricing-card p-6 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-bold text-center">Pro</h2>
          <p className="text-center text-2xl font-bold mt-4">$100/month</p>
          <ul className="mt-4 space-y-2">
            <li>1,000,000 transactions per month</li>
            <li>100 GB of hot/warm storage</li>
            <li>500 GB of cold storage</li>
            <li>Additional storage: $0.015/GB (Hot/Warm), $0.005/GB (Cold)</li>
            <li>Additional transactions: $1.00 per 1,000</li>
            <li>Cold data query: $0.01 per query</li>
            <li>Option to enable data deletion</li>
          </ul>
        </div>

        {/* Self-Hosted Option */}
        <div className="pricing-card p-6 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-bold text-center">Self-Hosted</h2>
          <p className="text-center text-2xl font-bold mt-4">Custom Pricing</p>
          <ul className="mt-4 space-y-2">
            <li>Host the solution on your own infrastructure</li>
            <li>Full control over storage and costs</li>
            <li>Custom integrations and deployment</li>
            <li>Contact us for setup and support</li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-center text-3xl font-bold">Data Retention Policy</h2>
        <p className="text-center mt-4">
          By default, your data is never deleted, ensuring you retain all historical transactions. However, we offer an
          option to enable data deletion after a set period to help manage long-term storage costs.
        </p>
      </div>

      <div className="mt-8 text-center">
        <button className="px-6 py-3 bg-black text-white rounded-md">Contact Us for Custom Plans</button>
      </div>
    </div>
  );
};

export default PricingPage;
