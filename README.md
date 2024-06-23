# DOCUMENTATION STORE-WAREHOUSE API

## DESCRIPTION API :

- This API provides endpoints for managing warehouse and goods data. It supports operations such as creating, retrieving, updating, and 
  deleting records, as well as specific queries for expired and soon-to-expire goods. 

## BASE URL :
http://localhost:3030/api

## ENDPOINTS : 

1. Gudang :
   
   A. Create Gudang :
      - URL: /gudang
      - Method: POST
      - Description: Creates a new gudang.
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
            "data": "integer"
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
      - Description: Get All Data Gudang
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
      - Description: Get By Id Data gudang.
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
      - Description: Updated Data gudang.
         * Request URL with Parameter:
        <pre>
          http://localhost:3030/api/gudang/:id
        </pre>
          
        * Response:
          Status Code: `200 OK`
          
          Body:  
          <pre>
          {
            "message": "Update Data Gudang Success",
            "data": {
              "message": "Update Data Gudang Success",
              "data": true
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
      - Description: Deleted data gudang.
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
          

2. Barang :
    A. Create Barang :
      - URL: /barang
      - Method: POST
      - Description: Creates a new barang.
        * Request Body:
          <pre>
          {
              "nama_barang": "string",
              "harga_barang": "number",
              "jumlah_barang": "integer",
              "expired_date": "string (YYYY-MM-DD)",
              "kode_gudang": "integer"
          }
         </pre>
          
        * Response:
          Status Code: `201 Created`
          
          Body:  
          <pre>
          {
             "message": "Create Barang Success",
             "data": "integer"
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
          
    B. Get All Barang :
      - URL: /barang
      - Method: GET
      - Description: Get All Data Barang
        * Request URL:
          <pre>
            http://localhost:3030/api/barang
          </pre>
          
        * Response:
          Status Code: `200 OK`
          
          Body:  
          <pre>
          {
            "message": "Get All Data Barang Success",
            "data": {
                 "Kode_barang": "integer",
                 "nama_barang": "string",
                 "harga_barang": "number",
                 "jumlah_barang": "integer",
                 "expired_date": "string (YYYY-MM-DD)",
                 "kode_gudang": "integer"
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
            
   C. Get By Id Barang :
      - URL: /barang/:id
      - Method: GET
      - Description: Get By Id Data Barang.
         * Request URL with Parameter:
        <pre>
          http://localhost:3030/api/barang/:id
        </pre>
          
        * Response:
          Status Code: `200 OK`
          
          Body:  
          <pre>
          {
            "message": "Get Id Data Barang Success",
            "data": {
                "kode_barang": "integer",
                "nama_barang": "string",
                "harga_barang": "number",
                "jumlah_barang": "integer",
                "expired_date": "string (YYYY-MM-DD)",
                "kode_gudang": "integer"
            }
          }
          </pre>
  
          * Data Not Found Code:
          Status Code: `404 Not Found`

          Body:
          <pre>
          {
            "message": "Data Barang Not Found"
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
      - URL: /barang/:id
      - Method: Put
      - Description: Updated Data Barang.
         * Request URL with Parameter:
        <pre>
          http://localhost:3030/api/barang/:id
        </pre>
          
        * Response:
          Status Code: `200 OK`
          
          Body:  
          <pre>
          {
            "message": "Update Data Barang Success",
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

   E. Delete Barang :
      - URL: /barang/:id
      - Method: Delete
      - Description: Deleted data barang.
         * Request URL with Parameter:
        <pre>
          http://localhost:3030/api/barang/:id
        </pre>
          
        * Response:
          Status Code: `200 OK`
          
          Body:  
          <pre>
          {
             "message": "Delete Data Barang Success",
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

   F. Get Expired Barang :
      - URL: /expired
      - Method: GET
      - Description: Get Data Expired Date Barang.
        * Request URL:
          <pre>
            http://localhost:3030/api/expired
          </pre>
          
        * Response:
          Status Code: `200 OK`
          
          Body:  
          <pre>
          {
            "message": "Get Expired Date Data Barang Success",
            "data": {
                 "Kode_barang": "integer",
                 "nama_barang": "string",
                 "harga_barang": "number",
                 "jumlah_barang": "integer",
                 "expired_date": "string (YYYY-MM-DD)",
                 "kode_gudang": "integer"
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

   F. Get Expired Soon Barang :
      - URL: /expired-soon/:days
      - Method: GET
      - Description: Get Data Expired Soon Barang.
        * Request URL:
          <pre>
            http://localhost:3030/api/expired-soon/:days
          </pre>
          
        * Response:
          Status Code: `200 OK`
          
          Body:  
          <pre>
          {
            "message": "Get Expire Date Data Barang Success, default is 7 days",
            "data": {
                 "Kode_barang": "integer",
                 "nama_barang": "string",
                 "harga_barang": "number",
                 "jumlah_barang": "integer",
                 "expired_date": "string (YYYY-MM-DD)",
                 "kode_gudang": "integer"
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


