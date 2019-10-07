# Digi-X-Assessment
Published by: Muhamad khairul filhan bin nusi


Digi-X “Lightning” Assessment for Developers

#Section 1: Application Programming Interface

i) Request data from specific resources. Code example : 

> axios.get('<resource_url>')
.then(function (response) {
console.log(response);
})
.catch(function (error) {
console.log(error);
});


ii)  Create or update  a child resource by sending data

>axios.post('/booking, {
user_id: “a1”,
event_name: “HR Management”,
Price : 19.00
Event_date : “19 October 2020”
})
.then(function (response) {
console.log(response);
})
.catch(function (error) {
console.log(error);
});

iii)  Update a partial resources that were supplied 

>axios.patch('/booking/1, {
Price : 20.00
})
.then(function (response) {
console.log(response);
})
.catch(function (error) {
console.log(error);
});




iv) Update resource by replacing the whole entity or object

>axios.put('/booking/1, {
user_id: “a1”,
event_name: “HR Revolution”,
price : 22.00
event_date : “25 October 2020”

})
.then(function (response) {
console.log(response);
})
.catch(function (error) {
console.log(error);
});

JWT token based authentication. This is the best approach by developers to secure all the services called by the client. Some public information can be stored in the token to perform specific instructions. 

For example :

>Let client_token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZDhjZTI4ZDM5ZTJlMzA5NjMzZTAyY2UiLCJpc3QiOjE1Njk5MzIxNDg3NjMsImlhdCI6MTU2OTkzMjE0OCwiZXhwIjoxNTc4NTcyMTQ4fQ.mQBms5rHNnLADVxRYJeQOFsS-qMSGEIo53AWNiECqew

To authenticate with the web service : 


>axios.post('/booking, {
user_id: “a1”,
event_name: “HR Management”,
Price : 19.00
Event_date : “19 October 2020”
},{
Headers : {‘Authorization’: ‘Bearer ${client_token} ’ }
})
.then(function (response) {
console.log(response);
})
.catch(function (error) {
console.log(error);
});

For successful request :

>{ 
"status": "success", 
"data": {
booking_id : 2,
amount_payable : 19.00,
status : ‘Pending for verification’
},
"message":  null
}

For failed request :

>{ 
"status": "error", 
"data":  null,
"message":  “Event registration has been closed”
}











