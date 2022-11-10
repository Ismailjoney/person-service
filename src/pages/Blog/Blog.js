import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Blog = () => {
    return (
        <div>
            <Card className="text-center mt-4 my-5">
                <Card.Header className='fw-bold'>Difference between SQL and NoSQL ?</Card.Header>
                <Card.Body className='w-75 mx-auto'>
                    <Card.Title>SQL:  Structured Query Language </Card.Title>
                    <Card.Text >
                        <p className='d-inline-block text-'>
                            SQL databases are a type of system software that supports management, analysis, capturing and querying the structured data in a relational format. <br />
                            A language used to communicate with databases for storage, deletion, updation, insertion and retrieval of data. <br />
                            SQL was developed in the year 1970 for flat file storage problems. <br />
                            SQL databases support Structured Query Languages
                            <br />
                            Vertically Scalable  (Add resources to increase the capacity of the existing hardware and software). <br />
                            SQL is relational. <br />
                            SQL is best suitable for complex queries, multi-row transactions. <br />
                        </p>
                    </Card.Text>
                    <Card.Title className='pt-3 py-3'>NoSQL : NoSQL database provides a mechanism for storage and retrieval of data that is modelled other than tabular form </Card.Title>
                    <Card.Text>
                        <ul>
                            <li>NoSQL databases are a type of software that allows to maintain and retrieve structured, unstructured, polymorphic data for different purposes.</li>
                            <li>NoSQL was developed in 2000 as an enhanced version for SQL databases for unstructured and semi-structured data.</li>
                            <li>NonSQL does not have any declarative query language.</li>
                            <li>Supports document oriented, graph databases, key value pair-based.</li>
                            <li>Horizontally Scalable (Changing small nodes with larger nodes to increase the capacity of the existing hardware and software).</li>
                            <li>Non-SQL is non relational.</li>
                            <li>NoSQL is best suited for unstructured data or documents. Not ideal for complex queries.</li>
                        </ul>
                    </Card.Text>

                </Card.Body>
            </Card>
            <Card className="text-center mt-4 my-5">
                <Card.Header className='fw-bold'>What is JWT, and how does it work?</Card.Header>
                <Card.Body>
                    <Card.Title>JWT :</Card.Title>
                    <Card.Text>
                        <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                    </Card.Text>
                    <Card.Title> how does it work:</Card.Title>
                    <p>Once the user successfully logs in, there may be a need to access data from the server. In such cases, the user can use JWT to retrieve the data. JWT should be sent by the user, typically in the Authorization header using the Bearer schema.</p>
                </Card.Body>
            </Card>
            <Card className="text-center mt-4 my-5">
                <Card.Header className='fw-bold'> What is the difference between javascript and NodeJS?</Card.Header>
                <Card.Body>
                    <Card.Title>javascript :</Card.Title>
                    <Card.Text>
                        <p>JavaScript is a language that runs inside web browsers as part of the documents loaded by the browser and is used as a client-side development language. It provides the behavior of the pages. Like HTML it provides the semantic structure and CSS the look and feel.</p>
                    </Card.Text>
                    <Card.Title>NODE JS :</Card.Title>
                    <Card.Text>
                        <p>NodeJs is an open source, cross-platform environment that allows you to create server-side applications and tools using JavaScript.</p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="text-center mt-4 my-5">
                <Card.Header className='fw-bold'>How does NodeJS handle multiple requests at the same time?</Card.Header>
                <Card.Body>
                    <Card.Title>NodeJS handle multiple requests :</Card.Title>
                    <Card.Text>
                        <p>As is, node. js can process upwards of 1000 requests per second and speed limited only to the speed of your network card. Note that it's 1000 requests per second not clients connected simultaneously. It can handle the 10000 simultaneous clients without issue.</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blog;