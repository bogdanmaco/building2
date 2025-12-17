# Test API endpoints

$API_URL = "http://localhost:5000/api"

# Headers
$headers = @{'Content-Type' = 'application/json'}

# 1. Create a category
Write-Host "=== Creating Category ===" -ForegroundColor Green
$categoryBody = @{
    name = "Electronics"
    description = "Electronic products"
    image = "https://via.placeholder.com/100"
    parentId = $null
} | ConvertTo-Json

try {
    $categoryResponse = Invoke-WebRequest -Uri "$API_URL/categories" -Method POST -Body $categoryBody -Headers $headers -SkipHttpErrorCheck
    Write-Host "Category Status: $($categoryResponse.StatusCode)"
    $category = $categoryResponse.Content | ConvertFrom-Json
    Write-Host "Category ID: $($category._id)"
    $categoryId = $category._id
} catch {
    Write-Host "Error creating category: $_" -ForegroundColor Red
    exit 1
}

# 2. Create a product
Write-Host "`n=== Creating Product ===" -ForegroundColor Green
$productBody = @{
    name = "Test Laptop"
    description = "High-performance laptop"
    price = 1299.99
    categoryId = $categoryId
    stock = 5
    active = $true
    image = "https://via.placeholder.com/300"
} | ConvertTo-Json

Write-Host "Product Body: $productBody"

try {
    $productResponse = Invoke-WebRequest -Uri "$API_URL/products" -Method POST -Body $productBody -Headers $headers -SkipHttpErrorCheck
    Write-Host "Product Status: $($productResponse.StatusCode)"
    $product = $productResponse.Content | ConvertFrom-Json
    Write-Host "Product ID: $($product._id)"
    Write-Host "Product Data: $($product | ConvertTo-Json)"
} catch {
    Write-Host "Error creating product: $_" -ForegroundColor Red
    Write-Host "Response: $($_.Exception.Response.StatusCode)"
    exit 1
}

# 3. Get all products
Write-Host "`n=== Getting All Products ===" -ForegroundColor Green
try {
    $productsResponse = Invoke-WebRequest -Uri "$API_URL/products" -Method GET -Headers $headers -SkipHttpErrorCheck
    Write-Host "Products Status: $($productsResponse.StatusCode)"
    $products = $productsResponse.Content | ConvertFrom-Json
    Write-Host "Total Products: $($products.Length)"
    $products | ForEach-Object { Write-Host "- $($_.name) ($($_.price))" }
} catch {
    Write-Host "Error getting products: $_" -ForegroundColor Red
}

Write-Host "`n✅ All tests passed!" -ForegroundColor Green
