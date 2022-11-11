import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className=' mt-4'>
                <h2 className='text-3xl'>What is difference between SQL and NoSQL ?</h2>
                <p>SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases, whereas NoSQL is a Non-relational or Distributed Database.Comparing SQL vs NoSQL databases, SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pairs, and graph databases.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance while NoSQL uses commodity hardware.</p>
            </div>
            <div className=' mt-4'>
                <h2 className='text-3xl'>
                What is JWT, and how does it work?
                </h2>
                <p>Ever wondered how JWT came to be and what problems it was designed to tackle? Are you curious about the plethora of algorithms available for signing and encrypting JWTs? Or are you interested in getting up-to-speed with JWTs as soon as possible? Then this handbook is for you.Although the main purpose of JWTs is to transfer claims between two parties, arguably the most
important aspect of this is the standardization effort in the form of a simple, optionally validated
and/or encrypted, container format. Ad hoc solutions to this same problem have been implemented
both privately and publicly in the past. Older standards8
for establishing claims about certain
parties are also available. What JWT brings to the table is a simple, useful, standard container
format</p>
            </div>
            <div className=' mt-4'>
                <h2 className='text-3xl'>
                What is the difference between javascript and NodeJS?
                </h2>
                <p>
                JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.JavaScript is a programming language, which runs in web browsers. Whereas Node.js is an interpreter or running environment for JavaScript, which holds a lot of requiring libraries and all. JavaScript is basically one standard defining programming language; it can run any browser with a default browser running environment. It is a very strong language normally used for a web application on any verification or any specific business logic. We need to append in the screen without page refreshing. JavaScript also helps to use Ajax at any time, which helps us call any server-side script for given dynamic data based on the requirement. It also helps with generating dynamic HTML tables based on business requirement. JQuery is one of the popular libraries to make comfortable use of JavaScript by avoiding to write a lot of code.
                </p>
            </div>
            <div className=' mt-4'>
                <h2 className='text-3xl'>
                How does NodeJS handle multiple requests at the same time?
                </h2>
                <p>
                When I was new in the Node.js world, I was wondering know how many requests can actually handle my Node.js application in production (as a real-world app). Or how many server instances do I need to handle a specific amount of traffic.Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue . NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded.Well, 40K rps is really huge, and also depends on some other factors besides the backend server. But at this moment let’s forget about those factors and only think about the backend hardware and software, about Node.js particularly.
                </p>
            </div>
            
        </div>
    );
};

export default Blog;