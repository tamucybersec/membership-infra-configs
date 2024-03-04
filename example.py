from elasticsearch import Elasticsearch

es = Elasticsearch(
    ["https://PRIVATE_IP:9200"],
    api_key=("ID", "KEY"),
    verify_certs=False  # cause we're using self-signed certs
)

print(es.info())

