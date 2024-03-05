const { Client } = require('@elastic/elasticsearch');

const client = new Client({
  node: 'https://PRIVATE_ID:9200',
  auth: {
    apiKey: 'ENCODED_KEY'
  },
  tls: {
    rejectUnauthorized: false // cause we're using self-signed certs
  }
});

async function checkClusterHealth() {
  try {
    const response = await client.cluster.health();
    console.log(response);
  } catch (error) {
    console.error('Error connecting to Elasticsearch:', error);
  }
}

checkClusterHealth();

