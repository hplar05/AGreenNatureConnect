if(!self.define){let s,e={};const c=(c,i)=>(c=new URL(c+".js",i).href,e[c]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=c,s.onload=e,document.head.appendChild(s)}else s=c,importScripts(c),e()})).then((()=>{let s=e[c];if(!s)throw new Error(`Module ${c} didn’t register its module`);return s})));self.define=(i,a)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let t={};const o=s=>c(s,n),r={module:{uri:n},exports:t,require:o};e[n]=Promise.all(i.map((s=>r[s]||o(s)))).then((s=>(a(...s),t)))}}define(["./workbox-7c2a5a06"],(function(s){"use strict";importScripts(),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"910f8b1946f9aeec17fe26cdfb413617"},{url:"/_next/static/F1Vc8ic0W1ko0Yh4Gssxo/_buildManifest.js",revision:"75740cacd3ef418c900cdf5afc2f6581"},{url:"/_next/static/F1Vc8ic0W1ko0Yh4Gssxo/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/00cbbcb7-a9da04b82330f3d0.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/12038df7-cd47af045c72ed9a.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/1524-ac993e30e0d675dc.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/1529-606dbf8ce82b7f18.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/1588-8f59ea9e4353aba0.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/199-71d88c208a54d98c.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/2356-5777b2551c955471.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/243dde97.52c4e935e95cf377.js",revision:"52c4e935e95cf377"},{url:"/_next/static/chunks/2609-9f2bb0e4fcabbb72.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/2650-9abc8e1c1e94ab9c.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/270-a3d170462b6839a1.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/2749-6fec7401e46d29b2.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/2932-1ac30a1be25f555e.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/3142-20ac8f51ab0a246e.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/3338.20fe4a787c712d44.js",revision:"20fe4a787c712d44"},{url:"/_next/static/chunks/3627521c-6f4e9a88740eecf9.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/3844.5c324058310da7e5.js",revision:"5c324058310da7e5"},{url:"/_next/static/chunks/3891-09763f667fa906a1.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/39209d7c-5d413ae764a24e89.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/4247-5598d8194fcc7775.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/4500.8314045ce4ad6148.js",revision:"8314045ce4ad6148"},{url:"/_next/static/chunks/4522-17cd450065350a40.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/4528.5b6f81b88654f759.js",revision:"5b6f81b88654f759"},{url:"/_next/static/chunks/4578-5ab544472c124aaf.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/4724-290c23a677b5865e.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/4b494101-41d97202e3b7b9e1.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/4f9d9cd8-293c172921753594.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/5221-885dd1a1a3914d5c.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/5387-dae444587a3b404e.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/541-07ba465602b82455.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/5513.78951b0fd09a25c7.js",revision:"78951b0fd09a25c7"},{url:"/_next/static/chunks/5542-0d5fc58784ede18d.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/558-9ddea4927cac38dd.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/6144.abdb7942b5731d55.js",revision:"abdb7942b5731d55"},{url:"/_next/static/chunks/6236-a838efad706c6a82.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/6312-bdf78afd6e4d82e3.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/6321-76f6acbf692d4a5e.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/6466-bd574ea159783df3.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/6622-a2e150073358fd9c.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/6964-86c4203eeb3ebc94.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/7016-53e1eb4f0b217859.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/707-b0595d19f88ba47b.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/7167-db18c9c9317e3060.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/737dfa3e-59d73bf13236be3a.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/7746.be7f7b2b75a72279.js",revision:"be7f7b2b75a72279"},{url:"/_next/static/chunks/7769-02db15f996037c47.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/7815.ffe8bac09c19c5f4.js",revision:"ffe8bac09c19c5f4"},{url:"/_next/static/chunks/7864-c100a6abbfb4d0f0.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/7870-eaa1f9a50ffa6b4d.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/8110-96c3dbba4a25fc93.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/8226-f315158dedaf5482.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/8245-4a05c39e8478ef23.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/8321.3dbc1c63ab6bf078.js",revision:"3dbc1c63ab6bf078"},{url:"/_next/static/chunks/8393-3248f25dc1245d14.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/8553.9561e4f6cd5d1428.js",revision:"9561e4f6cd5d1428"},{url:"/_next/static/chunks/8669-df85e11c3b961ce5.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/8691-72fb6aa8c53e2662.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/8712-8aee016a8aac334e.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/8903-4f42c1fd5aee5037.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/8dc5345f-02df9c8c457759bd.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/9081a741-0ba990a5bf284b0a.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/920-85369946ffe59cbb.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/9222-ac4192b7efe07316.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/9711-b727af58c070716c.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/9844.f31295e09527876a.js",revision:"f31295e09527876a"},{url:"/_next/static/chunks/9887-7bd891df97f9923a.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/98916abf-f133dbc2f5a4aed3.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/(auth)/changepassword/page-bed4246108f5dcfc.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/(auth)/forgetpassword/page-4392ae4c1a5ffb06.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/(auth)/layout-9bac93e88471125b.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/(landing-page)/layout-b0f8df51196da764.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/(landing-page)/page-c02ae0b1546f9359.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/(landing-page)/termsPolicy/page-a9e29ad5dd792841.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/(markethub)/cart/checkout/page-c14709a96c3dda21.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/(markethub)/cart/checkout/success/page-061b5780264ab55c.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/(markethub)/cart/page-131fb5f9b2816696.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/(markethub)/error-dbdaa9668dd47e6e.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/(markethub)/layout-c861ab7d739488aa.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/(markethub)/loading-936d9942a7f832ef.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/(markethub)/order-status/%5BtransactionId%5D/page-b26ed9a431d8335e.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/(markethub)/order-status/page-36a0aca024e5b17a.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/(user)/(read&learn)/article/page-539e9fc56717224b.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/(user)/(read&learn)/blogs/%5Bslug%5D/page-72c50b0ff795a8f2.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/(user)/(read&learn)/blogs/page-345be1b5976c6573.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/(user)/(read&learn)/learningMaterials/page-73e84c8b9edea4e1.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/(user)/(read&learn)/videotutorial/page-fbe00ec1e77358fb.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/(user)/discussion/%5Btopic%5D/%5BpostId%5D/page-4a4fb9123781e227.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/(user)/discussion/%5Btopic%5D/page-5774b3ffa5f5ba60.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/(user)/discussion/create-post/page-247541887cfdbc63.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/(user)/discussion/page-f353238ec633322a.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/(user)/layout-779b1579e2617bfd.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/(user)/markethub/%5BcommunityId%5D/page-9624627a0849f23a.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/(user)/markethub/page-653f3f1b77a5445c.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/(user)/profile/edit/page-1b1dbdf49a201ce4.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/(user)/profile/page-0a341d472eddb519.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/(user)/settings/page-6b8743a02028621e.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/_not-found-bf0cf5dac4d50a37.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/admin/add-employee/page-e942b087bca996d3.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/admin/article-requests/page-04ffee717a4846da.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/admin/blog-requests/page-8e80df9af5d85dd3.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/admin/community/page-10209219e94ede30.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/admin/create-community/page-56879d1a8397b640.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/admin/inventory/page-3c14b362a786fd1e.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/admin/layout-a82dcd79f304e520.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/admin/manage-employees/%5Bslug%5D/page-b7e2051d46e73564.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/admin/manage-employees/page-2d3ade23b7cdf353.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/admin/material-requests/page-948d1d2d1809ff63.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/admin/page-c36d98fcab3fb619.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/admin/products/page-2cd51d46222d8d53.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/admin/reports/page-2905e1abc0eed106.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/employee/create-blog/page-3e1357237bb90410.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/employee/create-materials/page-c023fab6de45c0e9.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/employee/create-products/page-4968c5f9b7bfe663.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/employee/create-topic/page-1d5ba644daf79d85.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/employee/edit-blog/%5Bslug%5D/page-8b56d6b898dd6aeb.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/employee/inventory/%5Bslug%5D/page-d72a70c214f4f322.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/employee/inventory/addstocks/%5Bslug%5D/page-361dde02ef6a1686.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/employee/inventory/page-f6ffa3c18b18f57d.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/employee/layout-a22c1619c0570fb3.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/app/employee/page-e716f250ff8aa1e2.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/bc9c3264-9387488e10dac2a8.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/d52199b0-046eeaad36cdf62e.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/d622d42c-33d35c7c54ad33c5.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/fd9d1056-7fd2d4be0dc1ec06.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/framework-4498e84bb0ba1830.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/main-app-915dc16ac5f7bc4c.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/main-d00e15bde5e02918.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/pages/_app-7bb460e314c5f602.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/pages/_error-8aa332dfaf8ff0ba.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-baf3779fe8ce3609.js",revision:"F1Vc8ic0W1ko0Yh4Gssxo"},{url:"/_next/static/css/36840340f3f01bb9.css",revision:"36840340f3f01bb9"},{url:"/_next/static/css/48c696ef46072a4c.css",revision:"48c696ef46072a4c"},{url:"/_next/static/css/b3010cc00e7383ae.css",revision:"b3010cc00e7383ae"},{url:"/_next/static/css/c9a3b95e60d92791.css",revision:"c9a3b95e60d92791"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/Free vegetables.55a1e331.png",revision:"e603eafc7652822213330143a653df37"},{url:"/_next/static/media/Image2.83b6d420.png",revision:"2e557171d999247305dd03031aa3f547"},{url:"/_next/static/media/Image3.57a63e78.png",revision:"968769e31832a0de7eb1587ab8781266"},{url:"/_next/static/media/Image4.32f9d102.png",revision:"174e9ec2bde057d4ff5d56d99c9c4403"},{url:"/_next/static/media/Vector.030f4364.png",revision:"efe389b8023d8868f1eb257fd4ba7ee0"},{url:"/_next/static/media/arrowRight.c92f530d.png",revision:"744d6d74d8bb230ff431343500e405a7"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/curve.2204bd11.png",revision:"347e41a87785c8134adf3920bda84503"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/default-user.20579340.jpg",revision:"4aa4dc7ee7e3f768154414f8e5dd38e7"},{url:"/_next/static/media/deliveryIcon.a3789315.png",revision:"ef250e4f70984dcbc6d1e7dab7bc2635"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/email.fb026695.png",revision:"1129c19e60ceb2adce5dd6906242e262"},{url:"/_next/static/media/facebook.96459d2e.png",revision:"06d49edf684582b281bacd4ba83b7c6a"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/features.4b9804b8.png",revision:"4ec21422321b17be693ed9a0bdcfd5e3"},{url:"/_next/static/media/growthIcon.96b5cbe7.png",revision:"53660b7c5c238770954c16e8558e2436"},{url:"/_next/static/media/healthIcon.b46f2070.png",revision:"04fd067566190258031d343abc71d2b2"},{url:"/_next/static/media/instagram.7169a408.png",revision:"938ea70301e5267c6d099b07d74b7a12"},{url:"/_next/static/media/knowledgeIcon.21d0cc32.png",revision:"7130adbecd05588225118ae65dacb4a9"},{url:"/_next/static/media/lightbulbIcon.c36e9a85.png",revision:"6bded421f0648c7fcf4c7e5f1082bee8"},{url:"/_next/static/media/location.b5e2fde8.png",revision:"7f9c204ecaad87b0a58afa9cf3019f5f"},{url:"/_next/static/media/logo.5572697d.png",revision:"868a1ac112617fcd4ba04956bad00f80"},{url:"/_next/static/media/phone.8d4c6ace.png",revision:"6238e02514d2dc256823c9c4b041a9e4"},{url:"/_next/static/media/subheading.9d5d8228.png",revision:"72c4bf5ab123d49dbaf4028b36de4282"},{url:"/_next/static/media/tiktok.88b851bf.png",revision:"984965c48d8a12c9bdb318e99aff78c6"},{url:"/_next/static/media/twitter.51708049.png",revision:"a944f5730040605d8bf9d2a9f202845d"},{url:"/icon-192x192.png",revision:"adcbe2cde976f9307a5665cb3ce58fb7"},{url:"/icon-256x256.png",revision:"66498dfcbd3c0152d517ed1a5868eead"},{url:"/icon-384x384.png",revision:"57640fc83dae8684fda2032acbb8cd6a"},{url:"/icon-512x512.png",revision:"8609caa672c04e450cb56a9bd213fe3b"},{url:"/images/Vector.png",revision:"efe389b8023d8868f1eb257fd4ba7ee0"},{url:"/images/about.png",revision:"440d650a7c1f9632dcfdb516f4f5f83e"},{url:"/images/arrowRight.png",revision:"744d6d74d8bb230ff431343500e405a7"},{url:"/images/avatar-placeholder.jpg",revision:"35975c8078fbc7111ae9b9252293d710"},{url:"/images/bannerbg.png",revision:"b062ba2035fedc9f83e5ddfcbdd41f80"},{url:"/images/curve.png",revision:"347e41a87785c8134adf3920bda84503"},{url:"/images/default-user.jpg",revision:"4aa4dc7ee7e3f768154414f8e5dd38e7"},{url:"/images/deliveryIcon.png",revision:"ef250e4f70984dcbc6d1e7dab7bc2635"},{url:"/images/discover.png",revision:"efb0eb0433a5461a700d3d0508c33a94"},{url:"/images/email.png",revision:"1129c19e60ceb2adce5dd6906242e262"},{url:"/images/employee/done_upload.svg",revision:"e09807a7409403d5a1baf0f1c4f1f223"},{url:"/images/facebook.png",revision:"06d49edf684582b281bacd4ba83b7c6a"},{url:"/images/features.png",revision:"4ec21422321b17be693ed9a0bdcfd5e3"},{url:"/images/growthIcon.png",revision:"53660b7c5c238770954c16e8558e2436"},{url:"/images/healthIcon.png",revision:"04fd067566190258031d343abc71d2b2"},{url:"/images/information-section/articles.png",revision:"d0c895054e6501351d65729547041ad9"},{url:"/images/information-section/blogs.png",revision:"1f9a507d08a5b4c558528dc75e75726b"},{url:"/images/information-section/learning-materials.png",revision:"af7b6df43fde0b3e88cb064cb671e91d"},{url:"/images/information-section/video-tutorial.png",revision:"ef927d3bd374f64a867326f9c567c227"},{url:"/images/instagram.png",revision:"938ea70301e5267c6d099b07d74b7a12"},{url:"/images/knowledgeIcon.png",revision:"7130adbecd05588225118ae65dacb4a9"},{url:"/images/leaf.png",revision:"fc3d233cb7a0abd215b04f733a3490f9"},{url:"/images/lightbulbIcon.png",revision:"6bded421f0648c7fcf4c7e5f1082bee8"},{url:"/images/location.png",revision:"7f9c204ecaad87b0a58afa9cf3019f5f"},{url:"/images/phone.png",revision:"6238e02514d2dc256823c9c4b041a9e4"},{url:"/images/subheading.png",revision:"72c4bf5ab123d49dbaf4028b36de4282"},{url:"/images/tiktok.png",revision:"984965c48d8a12c9bdb318e99aff78c6"},{url:"/images/twitter.png",revision:"a944f5730040605d8bf9d2a9f202845d"},{url:"/logo.png",revision:"868a1ac112617fcd4ba04956bad00f80"},{url:"/manifest.json",revision:"4f60f449706fa6ea5f0885700d8cf9be"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),s.cleanupOutdatedCaches(),s.registerRoute("/",new s.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:s,response:e,event:c,state:i})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new s.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new s.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new s.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/image\?url=.+$/i,new s.StaleWhileRevalidate({cacheName:"next-image",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:mp3|wav|ogg)$/i,new s.CacheFirst({cacheName:"static-audio-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:mp4)$/i,new s.CacheFirst({cacheName:"static-video-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:js)$/i,new s.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:css|less)$/i,new s.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new s.StaleWhileRevalidate({cacheName:"next-data",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:json|xml|csv)$/i,new s.NetworkFirst({cacheName:"static-data-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;const e=s.pathname;return!e.startsWith("/api/auth/")&&!!e.startsWith("/api/")}),new s.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;return!s.pathname.startsWith("/api/")}),new s.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>!(self.origin===s.origin)),new s.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
