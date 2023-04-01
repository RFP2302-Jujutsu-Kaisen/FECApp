# The Juju Store

An ecommerce website built to provide a friendly browsing experience.

## Authors
### [Dennis Hsu](https://github.com/denniseh7)\
Elliott Tung\
Donn Neufield

## Tech Stack

### Production
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![ExpressJS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![AWS](https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)

### Testing
![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)
![React Testing Library](https://img.shields.io/badge/testing%20library-323330?style=for-the-badge&logo=testing-library&logoColor=red)

<!--- Dennis: Product Overview --->
## Overview
This section shows information about the product as well as allows customers to select what style to add to their shopping cart.

### Features

* Product Information- See information about the product as well as the price 
* Image Gallery- Browse through photos of each style of the product
* Style Selector- Select the style of the product
* Add to Cart- Add the chosen quantity and size of the product to your cart

<details>
<summary>Additional Features</summary>
<br>
  <ul>
    <li>Zoom in to photos of the gallery</li>
    <li>Show products that are on sale</li>
    <li>Share their experience on social media about the product</li>
  </ul>
</details>

## Getting Started

### Requirements
* Node.js

### Installation
* Clone the repository
    ```
        git clone https://github.com/KFEC/TechStyles.git
    ```
* Install the dependencies
    ```
        npm install
    ```
* Copy example.env file and rename to .env with the following within
    ```
        PORT=3000

        HOST='localhost'

        API_TOKEN='Insert API token'

        WEBPACK_MODE='development'
    ```
* Run the following script
    ```
        npm run dev
        npm run start
    ```
