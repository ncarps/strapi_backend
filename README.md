# List of GraphQL Endpoints
To start the backend service, run ```yarn develop``` in a terminal, then visit the url:
```
http://localhost:1337/graphql
```
***

## Product

### Queries

1. products - Returns an array of all Products that exist in the database.

1. product - Fetches a single Product using its ID as a filter.

### Mutations
1. createProduct - Allows the user to create a Product. An image url would work should the user wish to create a Product with an image using the GraphQL playground.

1. updateProduct - Allows the user to change a Product's field values. All fields or a single field can be updated. The mutation uses the Product's ID for filtering.

1. deleteProduct - Removes a Product from the database using the Product's ID as a filter.
***
## Order

### Queries

1. orders - Returns an array of all Orders that exist in the database.

1. order - Fetches a single Order using its ID as a filter.

### Mutations
1. createOrder - Allows the user to create an Order. The user can also add Products while creating an Order in the GraphQL playground.

1. updateOrder - Allows the user to change an Order's field values. All fields or a single field can be updated. The mutation uses the Order's ID for filtering. The user may also add more Products to an Order using this mutation.

1. deleteOrder - Removes an Order from the database using the Order's ID as a filter.

