if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),f={module:{uri:n},exports:t,require:r};s[n]=Promise.all(i.map((e=>f[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"a64c63276a5229cd0997534be2e7a48c"},{url:"/_next/static/chunks/00cbbcb7-a9da04b82330f3d0.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/12038df7-cd47af045c72ed9a.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/1301-12943598da54d20f.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/1341-860a2c1a45dbf218.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/1940-78b304e4654c79e2.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/2001-2283c2c835124c3b.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/243dde97.52c4e935e95cf377.js",revision:"52c4e935e95cf377"},{url:"/_next/static/chunks/2498-7ea6d1234ae882bb.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/2609-8fa43909629b6731.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/2650-727d74461b77e65e.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/2749-d8505a2a85eac61c.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/2803-200bd3c79f37e6bb.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/2846-7db09a2a94e53417.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/2873-1c73a102864af903.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/3072-7b37ee73c0ba064f.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/3338.20fe4a787c712d44.js",revision:"20fe4a787c712d44"},{url:"/_next/static/chunks/3395-1ac7eb52215b3103.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/3627521c-f02e3f35cf53b812.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/3785-404f1967c061b53e.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/3803-63b8f1947561dbff.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/3807-7070b034ac1412c2.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/3844.5c324058310da7e5.js",revision:"5c324058310da7e5"},{url:"/_next/static/chunks/39209d7c-5d413ae764a24e89.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/4003-6625dadd786c6eaa.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/4287-5ab60a53c2b9852f.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/4500.8314045ce4ad6148.js",revision:"8314045ce4ad6148"},{url:"/_next/static/chunks/4528.5b6f81b88654f759.js",revision:"5b6f81b88654f759"},{url:"/_next/static/chunks/4578-5ab544472c124aaf.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/4704-926daaa74b589d0e.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/4724-10765557a33e0602.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/4b494101-41d97202e3b7b9e1.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/4f9d9cd8-293c172921753594.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/5009-d18f44d190e57460.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/5086-3c4179a73ea4fde3.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/5513.78951b0fd09a25c7.js",revision:"78951b0fd09a25c7"},{url:"/_next/static/chunks/5542-ddc13f7f21061a96.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/558-666427ca32fb8449.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/5929-28e8dcf085adbbb8.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/6046-a8283825e0fae2f7.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/6144.abdb7942b5731d55.js",revision:"abdb7942b5731d55"},{url:"/_next/static/chunks/6172-feda5f08e67fd22c.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/6312-7c8948d7e06295f7.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/6321-b0be184711bdeb4c.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/6424-bef51d98749d75bd.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/6622-16210654f2bd6119.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/6750-1a5bc9a260b7c49a.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/6826-752fa81f6662241c.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/6964-462134addabc7d6b.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/7016-963df9c25d4bcf9c.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/7087-0a9a0757d40fd2df.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/7289-f3d336a76b23d551.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/737dfa3e-59d73bf13236be3a.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/7604-8a641924def1b2be.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/7746.be7f7b2b75a72279.js",revision:"be7f7b2b75a72279"},{url:"/_next/static/chunks/7815.ffe8bac09c19c5f4.js",revision:"ffe8bac09c19c5f4"},{url:"/_next/static/chunks/7864-cc3cc7120830c4a9.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/7870-d1f857b662f93f35.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/80-e48a5d5bc795fd6e.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/8012-0613f19f6bb7867c.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/8110-400852bc9f00ae1a.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/814-8c7d3aa23ef7db7a.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/8321.3dbc1c63ab6bf078.js",revision:"3dbc1c63ab6bf078"},{url:"/_next/static/chunks/8553.9561e4f6cd5d1428.js",revision:"9561e4f6cd5d1428"},{url:"/_next/static/chunks/8597-cb7c5631b6c66115.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/8669-5d422760a9406090.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/8691-7fc688e2d267c76f.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/8837-8e7586ba92f2cd5b.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/8903-0fe3c39da6fb25a8.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/8dc5345f-02df9c8c457759bd.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/9081a741-0ba990a5bf284b0a.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/9348-33fb1bd4cc5db377.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/9413-9970b5ea9f2f83d0.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/9454-5e16110f00f6e954.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/9539-577ee425a66c91ab.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/9844.f31295e09527876a.js",revision:"f31295e09527876a"},{url:"/_next/static/chunks/9873-a1f3703debea5baa.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/98916abf-f133dbc2f5a4aed3.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/9963-045cbc7484157442.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/(auth)/changepassword/page-17739a2cc6b9cbfa.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/(auth)/forgetpassword/page-4730ee8e3c84ff22.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/(auth)/layout-273e70bb0dfbddae.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/(landing-page)/about/page-4fcb8e0778e564ee.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/(landing-page)/layout-bb9952dc56e1a456.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/(landing-page)/page-062b5181d66b3ae1.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/(landing-page)/termsPolicy/page-38c926dd3a5ca78e.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/(markethub)/cart/checkout/page-850a6e1cadc9e591.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/(markethub)/cart/checkout/success/page-c8f56bb5dfd01de1.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/(markethub)/cart/page-9417cf9e48eb9b13.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/(markethub)/error-9c87acdb3b329aa9.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/(markethub)/layout-4fb17ae321fdf4ce.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/(markethub)/loading-5c031d5da507b595.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/(markethub)/order-status/%5BtransactionId%5D/page-5c4cb93f6b25dfa4.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/(markethub)/order-status/page-6fd55af9ad5f75ec.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/(markethub)/shipping-information/page-dfa6d9f94f634e44.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/(user)/(read&learn)/article/page-e1ca7b71b3f62a4d.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/(user)/(read&learn)/blogs/%5Bslug%5D/page-feb93744e0d1209b.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/(user)/(read&learn)/blogs/page-9dcf4faeec47888c.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/(user)/(read&learn)/learningMaterials/page-a5b1e70b24d09448.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/(user)/(read&learn)/videotutorial/page-365fab86af619e2c.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/(user)/discussion/%5Btopic%5D/%5BpostId%5D/page-bd05c7cacef6b63f.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/(user)/discussion/%5Btopic%5D/page-51fc39cf142f019e.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/(user)/discussion/create-post/page-54261ea282a80ee5.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/(user)/discussion/page-ef9476295b8fa8eb.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/(user)/layout-cbb28cf5282cce70.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/(user)/markethub/%5BcommunityName%5D/page-3883e98176033100.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/(user)/markethub/page-8a53dfa72a6d4555.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/(user)/markethub/search/%5BproductName%5D/page-642943782ec488f9.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/(user)/profile/edit/page-5b223785e6d667a1.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/(user)/profile/page-2ccacef245f99d3f.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/(user)/searchplant/page-f4cfec2ec485f544.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/(user)/settings/page-aeba1a9edd5f1017.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/_not-found-073f47862c26e6a7.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/admin/add-employee/page-4e117d3dfc2d69aa.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/admin/article-requests/page-5d9f3b798197587a.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/admin/blog-requests/page-e9cce4070648d829.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/admin/community/page-6535abd8e28d3553.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/admin/create-community/page-d2be51b911a85545.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/admin/inventory/page-475531713428cfa5.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/admin/layout-c3b7cd9dad9c26d1.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/admin/manage-employees/%5Bslug%5D/page-1cd2d082ea7dd91a.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/admin/manage-employees/page-6da0a6869007cd5f.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/admin/material-requests/page-4c0e85bbdab3eaaf.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/admin/page-a0b79bbc6f20d24e.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/admin/products/page-b465c3291a821796.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/admin/reports/page-2d3d9aa5f4587a59.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/admin/video-requests/page-432457ee1b78ff34.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/employee/create-blog/page-d3e67f6ea3140a3a.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/employee/create-materials/page-89d1b4b28c0c788c.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/employee/create-products/page-08f7e95e4efa1b34.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/employee/create-topic/page-32fcb641a7056429.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/employee/create-video/page-cc325516c77b8763.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/employee/edit-blog/%5Bslug%5D/page-510cbe65dc617e01.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/employee/inventory/%5Bslug%5D/page-ae0faf9331dfb41c.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/employee/inventory/addstocks/%5Bslug%5D/page-eab3044598a5c6e6.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/employee/inventory/page-9b790ec33421d57a.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/employee/layout-6677411bf364e21c.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/employee/page-fe01ff6e1de60e16.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/orders/layout-6ff53c67465433cc.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/app/orders/page-9adda08c6b5ffccb.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/bc9c3264-9387488e10dac2a8.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/d52199b0-046eeaad36cdf62e.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/d622d42c-1bc34f60d33e15c7.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/fd9d1056-889e7abb1826c416.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/framework-4498e84bb0ba1830.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/main-2edc49d748b64557.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/main-app-209545e6169dab43.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/pages/_app-7bb460e314c5f602.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/pages/_error-8aa332dfaf8ff0ba.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/reactPlayerDailyMotion.b392919534283867.js",revision:"b392919534283867"},{url:"/_next/static/chunks/reactPlayerFacebook.2a05f4ee4e1d6cb3.js",revision:"2a05f4ee4e1d6cb3"},{url:"/_next/static/chunks/reactPlayerFilePlayer.962d76879a9ab66a.js",revision:"962d76879a9ab66a"},{url:"/_next/static/chunks/reactPlayerKaltura.ea370beb74b7d1fd.js",revision:"ea370beb74b7d1fd"},{url:"/_next/static/chunks/reactPlayerMixcloud.011770797262200c.js",revision:"011770797262200c"},{url:"/_next/static/chunks/reactPlayerPreview.91e3c4e104792959.js",revision:"91e3c4e104792959"},{url:"/_next/static/chunks/reactPlayerSoundCloud.5e98d8a72bf06835.js",revision:"5e98d8a72bf06835"},{url:"/_next/static/chunks/reactPlayerStreamable.dad7218c826fbb2b.js",revision:"dad7218c826fbb2b"},{url:"/_next/static/chunks/reactPlayerTwitch.d2d5c7fff73bd001.js",revision:"d2d5c7fff73bd001"},{url:"/_next/static/chunks/reactPlayerVidyard.fc2ed7c58f5f1db9.js",revision:"fc2ed7c58f5f1db9"},{url:"/_next/static/chunks/reactPlayerVimeo.5b9e1456ba7134c6.js",revision:"5b9e1456ba7134c6"},{url:"/_next/static/chunks/reactPlayerWistia.0a69ac323f55315c.js",revision:"0a69ac323f55315c"},{url:"/_next/static/chunks/reactPlayerYouTube.e0de3b7dd2f8684a.js",revision:"e0de3b7dd2f8684a"},{url:"/_next/static/chunks/webpack-cd167395e75baa40.js",revision:"heSfSq6MDYsTENTDr7qsZ"},{url:"/_next/static/css/1e997727c13adf5d.css",revision:"1e997727c13adf5d"},{url:"/_next/static/css/36840340f3f01bb9.css",revision:"36840340f3f01bb9"},{url:"/_next/static/css/b3010cc00e7383ae.css",revision:"b3010cc00e7383ae"},{url:"/_next/static/css/c9a3b95e60d92791.css",revision:"c9a3b95e60d92791"},{url:"/_next/static/heSfSq6MDYsTENTDr7qsZ/_buildManifest.js",revision:"75740cacd3ef418c900cdf5afc2f6581"},{url:"/_next/static/heSfSq6MDYsTENTDr7qsZ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/Free vegetables.55a1e331.png",revision:"e603eafc7652822213330143a653df37"},{url:"/_next/static/media/Image2.83b6d420.png",revision:"2e557171d999247305dd03031aa3f547"},{url:"/_next/static/media/Image3.57a63e78.png",revision:"968769e31832a0de7eb1587ab8781266"},{url:"/_next/static/media/Image4.32f9d102.png",revision:"174e9ec2bde057d4ff5d56d99c9c4403"},{url:"/_next/static/media/Vector.030f4364.png",revision:"efe389b8023d8868f1eb257fd4ba7ee0"},{url:"/_next/static/media/arrowRight.c92f530d.png",revision:"744d6d74d8bb230ff431343500e405a7"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/curve.2204bd11.png",revision:"347e41a87785c8134adf3920bda84503"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/default-user.20579340.jpg",revision:"4aa4dc7ee7e3f768154414f8e5dd38e7"},{url:"/_next/static/media/deliveryIcon.a3789315.png",revision:"ef250e4f70984dcbc6d1e7dab7bc2635"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/email.fb026695.png",revision:"1129c19e60ceb2adce5dd6906242e262"},{url:"/_next/static/media/facebook.96459d2e.png",revision:"06d49edf684582b281bacd4ba83b7c6a"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/features.4b9804b8.png",revision:"4ec21422321b17be693ed9a0bdcfd5e3"},{url:"/_next/static/media/growthIcon.96b5cbe7.png",revision:"53660b7c5c238770954c16e8558e2436"},{url:"/_next/static/media/healthIcon.b46f2070.png",revision:"04fd067566190258031d343abc71d2b2"},{url:"/_next/static/media/image 1.2a714772.png",revision:"09ccdbf820c23a95afe6a3c77be7b87a"},{url:"/_next/static/media/image 2.16d16504.png",revision:"ad7c799acacdc95da660b18de5e5fd3f"},{url:"/_next/static/media/image 3.a6897396.png",revision:"52e1c4d4ec2c23e10c1e60a4f2bab287"},{url:"/_next/static/media/instagram.7169a408.png",revision:"938ea70301e5267c6d099b07d74b7a12"},{url:"/_next/static/media/knowledgeIcon.21d0cc32.png",revision:"7130adbecd05588225118ae65dacb4a9"},{url:"/_next/static/media/lightbulbIcon.c36e9a85.png",revision:"6bded421f0648c7fcf4c7e5f1082bee8"},{url:"/_next/static/media/location.b5e2fde8.png",revision:"7f9c204ecaad87b0a58afa9cf3019f5f"},{url:"/_next/static/media/logo.5572697d.png",revision:"868a1ac112617fcd4ba04956bad00f80"},{url:"/_next/static/media/phone.8d4c6ace.png",revision:"6238e02514d2dc256823c9c4b041a9e4"},{url:"/_next/static/media/subheading.9d5d8228.png",revision:"72c4bf5ab123d49dbaf4028b36de4282"},{url:"/_next/static/media/tiktok.88b851bf.png",revision:"984965c48d8a12c9bdb318e99aff78c6"},{url:"/_next/static/media/twitter.51708049.png",revision:"a944f5730040605d8bf9d2a9f202845d"},{url:"/icon-192x192.png",revision:"adcbe2cde976f9307a5665cb3ce58fb7"},{url:"/icon-256x256.png",revision:"66498dfcbd3c0152d517ed1a5868eead"},{url:"/icon-384x384.png",revision:"57640fc83dae8684fda2032acbb8cd6a"},{url:"/icon-512x512.png",revision:"8609caa672c04e450cb56a9bd213fe3b"},{url:"/images/Vector.png",revision:"efe389b8023d8868f1eb257fd4ba7ee0"},{url:"/images/about.png",revision:"440d650a7c1f9632dcfdb516f4f5f83e"},{url:"/images/arrowRight.png",revision:"744d6d74d8bb230ff431343500e405a7"},{url:"/images/avatar-placeholder.jpg",revision:"35975c8078fbc7111ae9b9252293d710"},{url:"/images/bannerbg.png",revision:"b062ba2035fedc9f83e5ddfcbdd41f80"},{url:"/images/curve.png",revision:"347e41a87785c8134adf3920bda84503"},{url:"/images/default-user.jpg",revision:"4aa4dc7ee7e3f768154414f8e5dd38e7"},{url:"/images/deliveryIcon.png",revision:"ef250e4f70984dcbc6d1e7dab7bc2635"},{url:"/images/discover.png",revision:"efb0eb0433a5461a700d3d0508c33a94"},{url:"/images/email.png",revision:"1129c19e60ceb2adce5dd6906242e262"},{url:"/images/employee/done_upload.svg",revision:"e09807a7409403d5a1baf0f1c4f1f223"},{url:"/images/facebook.png",revision:"06d49edf684582b281bacd4ba83b7c6a"},{url:"/images/features.png",revision:"4ec21422321b17be693ed9a0bdcfd5e3"},{url:"/images/growthIcon.png",revision:"53660b7c5c238770954c16e8558e2436"},{url:"/images/healthIcon.png",revision:"04fd067566190258031d343abc71d2b2"},{url:"/images/image 1.png",revision:"09ccdbf820c23a95afe6a3c77be7b87a"},{url:"/images/image 2.png",revision:"ad7c799acacdc95da660b18de5e5fd3f"},{url:"/images/image 3.png",revision:"52e1c4d4ec2c23e10c1e60a4f2bab287"},{url:"/images/information-section/articles.png",revision:"d0c895054e6501351d65729547041ad9"},{url:"/images/information-section/blogs.png",revision:"1f9a507d08a5b4c558528dc75e75726b"},{url:"/images/information-section/learning-materials.png",revision:"af7b6df43fde0b3e88cb064cb671e91d"},{url:"/images/information-section/video-thumbnail.jpg",revision:"9ebbb9319a9482ffb76a1ff1feba738a"},{url:"/images/information-section/video-tutorial.png",revision:"ef927d3bd374f64a867326f9c567c227"},{url:"/images/instagram.png",revision:"938ea70301e5267c6d099b07d74b7a12"},{url:"/images/knowledgeIcon.png",revision:"7130adbecd05588225118ae65dacb4a9"},{url:"/images/leaf.png",revision:"fc3d233cb7a0abd215b04f733a3490f9"},{url:"/images/lightbulbIcon.png",revision:"6bded421f0648c7fcf4c7e5f1082bee8"},{url:"/images/location.png",revision:"7f9c204ecaad87b0a58afa9cf3019f5f"},{url:"/images/phone.png",revision:"6238e02514d2dc256823c9c4b041a9e4"},{url:"/images/subheading.png",revision:"72c4bf5ab123d49dbaf4028b36de4282"},{url:"/images/tiktok.png",revision:"984965c48d8a12c9bdb318e99aff78c6"},{url:"/images/twitter.png",revision:"a944f5730040605d8bf9d2a9f202845d"},{url:"/logo.png",revision:"868a1ac112617fcd4ba04956bad00f80"},{url:"/manifest.json",revision:"4f60f449706fa6ea5f0885700d8cf9be"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/undraw/no-result-found.svg",revision:"c82afcfcfcfab9cc81802eac6bcc92a5"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
