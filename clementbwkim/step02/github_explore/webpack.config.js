// path : 프로젝트 경로 가져올 때 쓰는 라이브러리

const path = require('path');

// require를 통해서 path 자동으로 찍어 가져올 수 있음

const MiniCssExtractPlugin = require('mini-css-extract-plgin');

// __dirname : const가 가지고 있는 키워드

const srcDir = path.resolve(__dirname, 'css');

// 자동으로 만들어지나, 만들어주는게 좋음

const distDir = path.resolve(__dirname, 'dist');    

// 할당 된 객체 다른 곳에서 쓸 수 있게 해주겠다.

module.exports = {

    // entry : 어떤 애들은 번들링 해줄 것인가

    entry: {

        // 경로.resolve('폴더명', '파일명')

        config: path.resolve(srcDir, 'config.scss')

    },

    // output : 번들링해서 어디에 출력할 것인가

    output: {

        path: distDir

    },

    // module : 룰을 정할 수 있음, 해당되는 파일들을 어떻게 할 것인가

    module: {

        rules: [

            {

                // 테스트할꺼야~

                test: /\,scss$/,

                // 어떤걸 사용할꺼야? css-loader

                use: [

                    {

                        loader: 'css-loader' // 최종 검수

                    },

                    //가장 마지막부터 loader함

                    'postcss-loader', // ie에 맞게끔 다시 속성 붙여줌

                    'sass-loader' // 먼저 읽음

                ],

            },

        ],

    },

    plugins: [

        new MiniCssExtractPlugin({

            filename: 'css[name].css',

        }),

    ],

};
