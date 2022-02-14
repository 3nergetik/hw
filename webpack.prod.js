constmerge=require('webpack-merge');
constcommon=require('./webpack.common');
constOptimizeCSSAssetsPlugin=require('optimize-css-assets-webpack-plugin');
module.exports=merge(common,{mode:'production',optimization:{minimize:true,minimizer:[newOptimizeCSSAssetsPlugin({}),'...',],},});