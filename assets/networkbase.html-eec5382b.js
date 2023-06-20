import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as a,a as l,e as t}from"./app-e2841e80.js";const r={},n=t('<h1 id="网络" tabindex="-1"><a class="header-anchor" href="#网络" aria-hidden="true">#</a> 网络</h1><h2 id="osi七层模型" tabindex="-1"><a class="header-anchor" href="#osi七层模型" aria-hidden="true">#</a> OSI七层模型</h2><ul><li>应用层</li><li>表示层</li><li>会话层</li><li>传输层</li><li>网络层</li><li>数据链路层</li><li>物理层</li></ul><h2 id="tcp-ip四层模型" tabindex="-1"><a class="header-anchor" href="#tcp-ip四层模型" aria-hidden="true">#</a> TCP/IP四层模型</h2><ul><li>应用层</li><li>传输层</li><li>网络层</li><li>链路层</li></ul><h2 id="tcp三次握手" tabindex="-1"><a class="header-anchor" href="#tcp三次握手" aria-hidden="true">#</a> TCP三次握手</h2><ul><li>第一次握手：建立连接时，客户端发送syn包（syn=j）到服务器，并进入SYN_SEND状态，等待服务器确认；SYN：同步序列编号（Synchronize Sequence Numbers）</li><li>第二次握手：服务器收到syn包，必须确认客户的SYN（ack=j+1），同时自己也发送一个SYN包（syn=k），即SYN+ACK包，此时服务器进入SYN_RECV状态；</li><li>第三次握手：客户端收到服务器的SYN+ACK包，向服务器发送确认包ACK(ack=k+1)，此包发送完毕，客户端和服务器进入ESTABLISHED状态，完成三次握手。</li></ul><h2 id="tcp四次挥手" tabindex="-1"><a class="header-anchor" href="#tcp四次挥手" aria-hidden="true">#</a> TCP四次挥手</h2><ul><li>第一次挥手：主动关闭方发送一个FIN，用来关闭主动方到被动关闭方的数据传送，也就是主动关闭方告诉被动关闭方：我已经不会再给你发数据了(当然，在fin包之前发送出去的数据，如果没有收到对应的ack确认报文，主动关闭方依然会重发这些数据)，但是，此时主动关闭方还可 以接受数据。</li><li>第二次挥手：被动关闭方收到FIN包后，发送一个ACK给对方，确认序号为收到序号+1（与SYN相同，一个FIN占用一个序号）。</li><li>第三次挥手：被动关闭方发送一个FIN，用来关闭被动关闭方到主动关闭方的数据传送，也就是告诉主动关闭方，我的数据也发送完了，不会再给你发数据了。</li><li>第四次挥手：主动关闭方收到FIN后，发送一个ACK给被动关闭方，确认序号为收到序号+1，至此，完成四次挥手。</li></ul>',9);function o(c,s){return e(),a("div",null,[l(`
 * @Author: liguojing liguojing@tal.com
 * @Date: 2023-06-19 21:47:18
 * @LastEditors: liguojing liguojing@tal.com
 * @LastEditTime: 2023-06-19 21:49:30
 * @FilePath: /github/codingdocs/src/fe/network/networkbase.md
 * @Description: 这是默认设置,请设置\`customMade\`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
`),n])}const u=i(r,[["render",o],["__file","networkbase.html.vue"]]);export{u as default};
