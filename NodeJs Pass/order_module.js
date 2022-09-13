var schemafinal=[]
let totalPrice=0
const fs=require('fs');
let data=fs.readFileSync('./data.txt','utf8').split(',');
data.forEach(ele=>{
    var person=ele.split('\r\n')
    if (person[0]!=''){
        
        var itemschema=[];
        var name=person[0];
        var address=person[1].split(' ')
        var totalprice=0;
        for(var i=0;i<person[2];i++){
            var item=person[i+3].split(' ')
            var items ={
                "name":item[0],
                "count":item[1],                    
                "price":item[2],
                "total":item[3]
                
            }
            itemschema.push(items)
        }
        var count=Number(person[2])
        var price=person[count+3];
        var prices=price.split(' ')
        
        var schema=
                {
                    "customer":name,
                    "address":{
                        "latitude":address[0],
                        "longitude":address[1],
                    },
                    "items":itemschema,

                    "total":prices[0],
                    "discount":prices[1],
                    "totalAfterDiscount":prices[2]
        
                
            
        }
        totalPrice+=Number(prices[2])
        schemafinal.push(schema)
        
        
    }
    else{
        var itemschema=[];
        var name=person[1];
        var address=person[2].split(' ')
        var totalprice=0;
        for(var i=0;i<person[3];i++){
            var item=person[i+4].split(' ')
            var items ={
                "name":item[0],
                "count":item[1],                    
                "price":item[2],
                "total":item[3]
                
            }
            
            totalprice+=Number(item[3]);
            itemschema.push(items)
            
        }
        var count=Number(person[3])
            var price=person[count+4];
            var prices=price.split(' ')

        // console.log(itemschema)
        // console.log(totalprice)
        var schema=
        {
            "customer":name,
            "address":{
                "latitude":address[0],
                "longitude":address[1],
            },
            "items":itemschema,

            "total":prices[0],
            "discount":prices[1],
            "totalAfterDiscount":prices[2]

        
    
}
totalPrice+=Number(prices[2])
schemafinal.push(schema)
    }
let schemaFinalResult=({"orders":(schemafinal),
"total":totalPrice}) 

module.exports=schemaFinalResult;
})
