const PricingPage = () => {
  return (
    <div className="pricing-page">
      <h1 className="text-center text-4xl font-bold">Pricing</h1>
      <p className="text-center text-lg mt-4">Choose the plan that fits your business needs.</p>
      
      <div className="pricing-table mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Solo Plan */}
        <div className="pricing-card p-6 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-bold text-center">Solo</h2>
          <p className="text-center text-2xl font-bold mt-4">$50/month</p>
          <ul className="mt-4 space-y-2">
            <li>100,000 transactions per month</li>
            <li>50 GB of hot/warm storage</li>
            <li>No cold storage available</li>
            <li>Additional storage: $0.02/GB (Hot/Warm)</li>
            <li>Additional transactions: $1.25 per 1,000</li>
            <li>Option to enable data deletion</li>
          </ul>
        </div>

        {/* Startup Plan */}
        <div className="pricing-card p-6 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-bold text-center">Startup</h2>
          <p className="text-center text-2xl font-bold mt-4">$300/month</p>
          <ul className="mt-4 space-y-2">
            <li>500,000 transactions per month</li>
            <li>200 GB of hot/warm storage</li>
            <li>Additional storage: $0.02/GB (Hot/Warm)</li>
            <li>Additional transactions: $1.00 per 1,000</li>
            <li>Option to enable data deletion</li>
          </ul>
        </div>

        {/* Small Corporation Plan */}
        <div className="pricing-card p-6 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-bold text-center">Small Corporation</h2>
          <p className="text-center text-2xl font-bold mt-4">$800/month</p>
          <ul className="mt-4 space-y-2">
            <li>2,000,000 transactions per month</li>
            <li>1,000 GB of hot/warm storage</li>
            <li>Additional storage: $0.02/GB (Hot/Warm)</li>
            <li>Additional transactions: $0.85 per 1,000</li>
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
