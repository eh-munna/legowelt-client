import React from 'react';
import useTitleChange from '../../TitleChange/TitleChange';

const Blog = () => {
  useTitleChange('Legowelt || Blog');
  return (
    <div className="my-6 md:my-16">
      <div className="capitalize text-center space-y-3 py-4 md:py-12">
        <h2 className="text-2xl md:text-5xl font-[archivo] text-[#0077b6]">
          Knowledge Hub
        </h2>
        <p className="text-[#00b4d8] font-[roboto] text-base md:text-xl">
          Your Comprehensive Guide
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
        <div className="flex flex-col  gap-6 shadow-lg p-6 md:p-9 rounded-md border border-[#0077b6] border-opacity-5 bg-[#0077b6] bg-opacity-5">
          <h3 className="text-xl md:text-2xl font-[archivo] text-[#0077b6]">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h3>
          <p className="text-[#00b4d8] font-[roboto] text-base md:text-xl">
            <span className="font-medium">Access Token : </span>
            An access token is a unique identifier for a user&apos;s session. It
            can be used to authenticate a user to the API. Each access token has
            a specific scope, lifespan, and other attributes.
          </p>
          <p className="text-[#00b4d8] font-[roboto] text-base md:text-xl">
            <span className="font-medium">Refresh Token : </span> A refresh
            token is a credential that a client uses to obtain new access tokens
            without requiring additional user authorization.
          </p>
          <p className="text-[#00b4d8] font-[roboto] text-base md:text-xl">
            <span className="font-medium">How do they work : </span> Token-based
            authentication is a type of authentication that generates encrypted
            security tokens. It enables users to verify their identity to
            websites, which then generates the unique encrypted authentication
            token. That token then provides users with access to protected pages
            and resources for a limited period of time without having to
            re-enter their username and password.
          </p>
          <p className="text-[#00b4d8] font-[roboto] text-base md:text-xl">
            <span className="font-medium">Where to store them : </span> We have
            options to store tokens on the client-side, or on the server-side.
            For client-side tokens, we can use cookies or localStorage.
          </p>
        </div>
        <div className="flex flex-col gap-6 shadow-lg p-6 md:p-9 rounded-md border border-[#0077b6] border-opacity-5 bg-[#0077b6] bg-opacity-5">
          <h3 className="text-xl md:text-2xl font-[archivo] text-[#0077b6]">
            Compare SQL and NoSQL databases?
          </h3>
          <div className="flex flex-col gap-2 text-[#00b4d8] font-[roboto] text-base md:text-xl">
            <p>
              There are some differences between SQL databases and NoSQL
              databases
            </p>
            <p className="font-medium py-2">SQL databases</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                SQL are structured data model. Here data are organized into
                tables with predefined schemas
              </li>
              <li>
                SQL databases use SQL as the standard query language for
                retrieving, manipulating, and managing data
              </li>
              <li>
                SQL databases are often preferred for applications that require
                complex queries, structured data, and strict data consistency
              </li>
            </ul>

            <p className="font-medium py-2">NoSQL databases</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                NoSQL databases provide a flexible data model that can handle
                various types of data, including unstructured and
                semi-structured data
              </li>
              <li>
                NoSQL databases often have their own query languages or APIs
                specific to their data models
              </li>
              <li>
                NoSQL databases are well-suited for handling large volumes of
                unstructured or semi-structured data, real-time applications,
                and situations that require high scalability and agility
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-6 shadow-lg p-6 md:p-9 rounded-md border border-[#0077b6] border-opacity-5 bg-[#0077b6] bg-opacity-5">
          <h3 className="text-xl md:text-2xl font-[archivo] text-[#0077b6]">
            What is express JS? What is Nest JS?
          </h3>
          <p className="text-[#00b4d8] font-[roboto] text-base md:text-xl">
            <span className="font-medium">Express JS : </span> Express is a node
            js web application framework that provides broad features for
            building web and mobile applications. It is used to build a single
            page, multipage, and hybrid web application
          </p>
          <p className="text-[#00b4d8] font-[roboto] text-base md:text-xl">
            <span className="font-medium">Nest JS : </span> NestJS is a popular
            open-source, back-end framework for Node.js. It allows developers to
            easily organize their code into smaller and reusable modules
          </p>
        </div>
        <div className="flex flex-col gap-6 shadow-lg p-6 md:p-9 rounded-md border border-[#0077b6] border-opacity-5 bg-[#0077b6] bg-opacity-5">
          <h3 className="text-xl md:text-2xl font-[archivo] text-[#0077b6]">
            What is MongoDB aggregate and how does it work?
          </h3>
          <p className="text-[#00b4d8] font-[roboto] text-base md:text-xl">
            <span className="font-medium">MongoDB aggregation : </span>
            MongoDB aggregation is a way to query documents from MongoDB in a
            way that breaks down these more confounding queries. It separates
            complex logic into sequential operations
          </p>
          <p className="text-[#00b4d8] font-[roboto] text-base md:text-xl">
            <span className="font-medium">How does it work : </span>We can start
            aggregation with our collection&apos;s data and after each stage of
            the pipeline we are closer to the end result which will be the
            desired documents. Each stage performs an operation on the
            documents. There are several operations that can be conducted. For
            example, a stage can filter, group, or even calculate values on the
            data. After each stage, the outputted documents are passed into the
            next stage and so on until no stages are left
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
