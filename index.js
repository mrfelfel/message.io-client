let NRP =  require('node-redis-pubsub');

function connect(cfg) {
    const nrp = new NRP(cfg);
    return {


        Query(query, callback){
           
            nrp.on('query_gram', async (data) => {
                if ((data.scope === query.scope) && (data.address === query.address) && (data.info.method === query.method)) {
    
    
                    callback({
                        sender: data.uid,
                        nameSpace: data.nameSpace,
                        data: data.info.data
                    })
                }
            });
    
        }
    
    }
}

module.exports = connect
