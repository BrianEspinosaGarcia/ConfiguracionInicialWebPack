const HtmlWebPackPlugin       = require('html-webpack-plugin');
const MiniCssExtractPlugin    = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MinifyPlugin            = require("babel-minify-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production', // tambien aqui se puede cambiar a production
    optimization: { // Cuando se cambie al modo de [production] ahora si este se hara y se minificara el css
        minimizer: [
            new OptimizeCssAssetsPlugin()
         ]
    },
    output: {
        filename: 'main.[contentHash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,  // Configuracion para Babel que se aplique a todos los archivos js
                exclude: /node_modules/, 
                use: [
                    "babel-loader"
                ]
            },
            {
                test: /\.css$/,
                exclude: /styless\.css$/,
                use: [
                    'style-loader', // Con estas las importaciones dentro de mi componente de archivos css los colocaran en el dist
                    'css-loader' // Estas dos dependencia son las que ayudan a lograr estas integraciones
                ]
            },
            {
                test: /styless\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader', 
                        options: { minimize: false } // Este es para minimizar y  quitar los comentarios o minificar
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/, // Dice que se hara con cada imagen que se encuentre
                use:[
                    {
                        loader: 'file-loader', // Aqui se establece la configuracionnp
                        options: {
                            esModule: false,
                            name: 'assets/[name].[ext]' // Es para establecer que al compilado queremos que se respete la localizacion de la imagen 
                                                        // Asi como para conservar su mismo nombre y ruta 
                        }
                    }
                ]
            }
        ]
    },
    plugins: [ // Esto es lo que genera dentro del dist ... la creacion de archivos
        new HtmlWebPackPlugin({ // Se crea el html chido
            template: './src/index.html', // Aqui dice que archivo tomas y hacia donde lo llevas 
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({ // Se crea el css General del documento
            filename: '[name].[contentHash].css', // De esta forma dice que al nombre que se agrega le pone un hash para prevenir el guardado de  cache
            ignoreOrder: false
        }),
        new MinifyPlugin(), // Para minificar correctamente los archivos
        new CleanWebpackPlugin()

    ]
}