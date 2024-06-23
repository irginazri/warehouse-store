## DOCUMENTATION STORE-WAREHOUSE API

BASE URL :
http://localhost:3030/api

ENDPOINTS : 

1. Gudang :
   
   A. Create Gudang :
      - URL: /gudang
      - Method: POST
        * Request Body:
        <pre>
          {
            "nama_gudang": "string"
          }
        </pre>
          
        * Response:
          Status Code: `201 Created`
          
          Body:  
          <pre>
          {
            "message": "Create Gudang Success",
            "data": {
              "kode_gudang": "integer",
              "nama_gudang": "string",
            }
          }
          </pre>
          
        * Error Code:
          Status Code: `500 Internal Server Error`

          Body:
          <pre>
          {
            "error": "Error message"
          }
          </pre>
          
   B. Get All Gudang :
      - URL: /gudang
      - Method: GET
      - Response:
         * Request URL:
        <pre>
          http://localhost:3030/api/gudang
        </pre>
          
        * Response:
          Status Code: `200 OK`
          
          Body:  
          <pre>
          {
            "message": "Get All Data Gudang Success",
            "data": {
              "kode_gudang": "integer",
              "nama_gudang": "string",
            }
          }
          </pre>
          
        * Error Code:
          Status Code: `500 Internal Server Error`

          Body:
          <pre>
          {
            "error": "Error message"
          }
          </pre>
   
   C. Get By Id Gudang :
      - URL: /gudang/:id
      - Method: GET
      - Response:
         * Request URL with Parameter:
        <pre>
          http://localhost:3030/api/gudang/:id
        </pre>
          
        * Response:
          Status Code: `200 OK`
          
          Body:  
          <pre>
          {
            "message": "Get Gudang By Id Success",
            "data": {
              "kode_gudang": "integer",
              "nama_gudang": "string",
            }
          }
          </pre>
  
          * Data Not Found Code:
          Status Code: `404 Not Found`

          Body:
          <pre>
          {
            "message": "Data Gudang Not Found"
          }
          </pre>
          
        * Error Code:
          Status Code: `500 Internal Server Error`

          Body:
          <pre>
          {
            "error": "Error message"
          }
          </pre>

   D. Update Gudang :
      - URL: /gudang/:id
      - Method: Put
      - Response:
         * Request URL with Parameter:
        <pre>
          http://localhost:3030/api/gudang/:id
        </pre>
          
        * Response:
          Status Code: `200 OK`
          
          Body:  
          <pre>
          {
            "message": "Update data Success",
            "data": {
              "kode_gudang": "integer",
              "nama_gudang": "string",
            }
          }
          </pre>
          
        * Error Code:
          Status Code: `500 Internal Server Error`

          Body:
          <pre>
          {
            "error": "Error message"
          }
          </pre>

        
   E. Delete Gudang :
      - URL: /gudang/:id
      - Method: Delete
      - Response:
         * Request URL with Parameter:
        <pre>
          http://localhost:3030/api/gudang/:id
        </pre>
          
        * Response:
          Status Code: `200 OK`
          
          Body:  
          <pre>
          {
             "message": "Delete Data Gudang Success",
             "data": true
          }
          </pre>
          
        * Error Code:
          Status Code: `500 Internal Server Error`

          Body:
          <pre>
          {
            "error": "Error message"
          }
          </pre>
          

          
      
   
