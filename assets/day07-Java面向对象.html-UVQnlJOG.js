import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as p}from"./app-CjZSNBEJ.js";const t={},e=p(`<blockquote><p>面向对象的一个介绍：</p><p>面向：拿、找</p><p>对象：能干活的东西</p><p>面向对象编程：拿东西过来做对应的事情</p></blockquote><p>带着一些问题进行学习：</p><p>为什么要使用面向对象编程？</p><p>面向对象编程到底学什么？</p><h2 id="java为什么要使用面向对象的方式来编程" tabindex="-1"><a class="header-anchor" href="#java为什么要使用面向对象的方式来编程"><span>Java为什么要使用面向对象的方式来编程？</span></a></h2><p>我们要洗衣服时，就是用的洗衣机帮我们完成这件事情</p><p>我们要扫地时，可以找扫地机器人帮我们完成这件事事情</p><p>跟朋友聊天时，可以通过手机帮我们完成这件事情</p><p><strong>符合人类思维习惯，让编程更简单，更好理解</strong></p><figure><img src="https://blog-codecnm-cn.oss-cn-chengdu.aliyuncs.com/blog/image-20231224225553701.png" alt="image-20231224225553701" tabindex="0" loading="lazy"><figcaption>image-20231224225553701</figcaption></figure><h2 id="在java中面向对象到底学什么" tabindex="-1"><a class="header-anchor" href="#在java中面向对象到底学什么"><span>在Java中面向对象到底学什么？</span></a></h2><ol><li>学习获取已有的对象并使用</li><li>学习如何自己设计对象并使用 ==&gt; 面向对象的语法</li></ol><h2 id="_1-类和对象" tabindex="-1"><a class="header-anchor" href="#_1-类和对象"><span>1. 类和对象</span></a></h2><h3 id="_1-1-类和对象的理解" tabindex="-1"><a class="header-anchor" href="#_1-1-类和对象的理解"><span>1.1 类和对象的理解</span></a></h3><p>客观存在的事物皆为对象 ，所以我们也常常说万物皆对象。</p><ul><li>类 <ul><li>类的理解 <ul><li>类是对现实生活中一类具有共同属性和行为的事物的抽象</li><li>类是对象的数据类型，类是具有相同属性和行为的一组对象的集合</li><li>简单理解：类就是对现实事物的一种描述</li></ul></li><li>类的组成 <ul><li>属性：指事物的特征，例如：手机事物（品牌，价格，尺寸）</li><li>行为：指事物能执行的操作，例如：手机事物（打电话，发短信）</li></ul></li></ul></li><li>类和对象的关系 <ul><li>类：类是对现实生活中一类具有共同属性和行为的事物的抽象</li><li>对象：是能够看得到摸的着的真实存在的实体</li><li>简单理解：<strong>类是对事物的一种描述，对象则为具体存在的事物</strong></li></ul></li></ul><h3 id="_1-2-类的定义" tabindex="-1"><a class="header-anchor" href="#_1-2-类的定义"><span>1.2 类的定义</span></a></h3><p>类的组成是由属性和行为两部分组成</p><ul><li>属性：在类中通过成员变量来体现（类中方法外的变量）</li><li>行为：在类中通过成员方法来体现（和前面的方法相比去掉static关键字即可）</li></ul><p>类的定义步骤：</p><p>①定义类</p><p>②编写类的成员变量</p><p>③编写类的成员方法</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> 类名 <span class="token punctuation">{</span>
	<span class="token comment">// 成员变量</span>
	变量<span class="token number">1</span>的数据类型 变量<span class="token number">1</span>；
	变量<span class="token number">2</span>的数据类型 变量<span class="token number">2</span><span class="token punctuation">;</span>
	…
	<span class="token comment">// 成员方法</span>
	方法<span class="token number">1</span><span class="token punctuation">;</span>
	方法<span class="token number">2</span><span class="token punctuation">;</span>	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例代码：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">/*
    手机类：
        类名：
        手机(Phone)

        成员变量：
        品牌(brand)
        价格(price)

        成员方法：
        打电话(call)
        发短信(sendMessage)
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Phone</span> <span class="token punctuation">{</span>
    <span class="token comment">//成员变量</span>
    <span class="token class-name">String</span> brand<span class="token punctuation">;</span>
    <span class="token keyword">int</span> price<span class="token punctuation">;</span>

    <span class="token comment">//成员方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;打电话&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;发短信&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-对象的使用" tabindex="-1"><a class="header-anchor" href="#_1-3-对象的使用"><span>1.3 对象的使用</span></a></h3><ul><li>创建对象的格式： <ul><li>类名 对象名 = new 类名();</li></ul></li><li>调用成员的格式： <ul><li>对象名.成员变量</li><li>对象名.成员方法();</li></ul></li><li>示例代码</li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">/*
    创建对象
        格式：类名 对象名 = new 类名();
        范例：Phone p = new Phone();

    使用对象
        1：使用成员变量
            格式：对象名.变量名
            范例：p.brand
        2：使用成员方法
            格式：对象名.方法名()
            范例：p.call()
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PhoneDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//创建对象</span>
        <span class="token class-name">Phone</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Phone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//使用成员变量</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>price<span class="token punctuation">)</span><span class="token punctuation">;</span>

        p<span class="token punctuation">.</span>brand <span class="token operator">=</span> <span class="token string">&quot;小米&quot;</span><span class="token punctuation">;</span>
        p<span class="token punctuation">.</span>price <span class="token operator">=</span> <span class="token number">2999</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>price<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//使用成员方法</span>
        p<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        p<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-学生对象-练习" tabindex="-1"><a class="header-anchor" href="#_1-4-学生对象-练习"><span>1.4 学生对象-练习</span></a></h3><ul><li>需求：首先定义一个学生类，然后定义一个学生测试类，在学生测试类中通过对象完成成员变量和成员方法的使用</li><li>分析： <ul><li>成员变量：姓名，年龄…</li><li>成员方法：学习，做作业…</li></ul></li><li>示例代码：</li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token comment">//成员变量</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token comment">//成员方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">study</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;好好学习，天天向上&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doHomework</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;键盘敲烂，月薪过万&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
    学生测试类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StudentDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//创建对象</span>
        <span class="token class-name">Student</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//使用对象</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span> <span class="token operator">+</span> s<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>

        s<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;林青霞&quot;</span><span class="token punctuation">;</span>
        s<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span> <span class="token operator">+</span> s<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>

        s<span class="token punctuation">.</span><span class="token function">study</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        s<span class="token punctuation">.</span><span class="token function">doHomework</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>定义类的补充注意事项：</p><ol><li>类名首字母建议大写，需要见名知意，驼峰模式。</li><li>一个Java文件中可以定义多个class类，且只能一个类是public修饰，而且public修饰的类名必须成为代码文件名。<strong>实际开发中建议还是一个文件定义一个class类</strong></li><li>成员变量的完整定义格式是：<code>修饰符 数据类型 变量名称 = 初始化值；</code>一般无需指定初始化值，因为其存在默认值。</li></ol></blockquote><p>基本类型和引用类型对象的默认值：</p><figure><img src="https://blog-codecnm-cn.oss-cn-chengdu.aliyuncs.com/blog/image-20231224231307531.png" alt="image-20231224231307531" tabindex="0" loading="lazy"><figcaption>image-20231224231307531</figcaption></figure><h2 id="_2-对象内存图" tabindex="-1"><a class="header-anchor" href="#_2-对象内存图"><span>2. 对象内存图</span></a></h2><h3 id="_2-1-单个对象内存图" tabindex="-1"><a class="header-anchor" href="#_2-1-单个对象内存图"><span>2.1 单个对象内存图</span></a></h3><ul><li>成员变量使用过程</li></ul><figure><img src="https://blog-codecnm-cn.oss-cn-chengdu.aliyuncs.com/blog/1.png" alt="1" tabindex="0" loading="lazy"><figcaption>1</figcaption></figure><ul><li>成员方法调用过程</li></ul><figure><img src="https://blog-codecnm-cn.oss-cn-chengdu.aliyuncs.com/blog/2.png" alt="2" tabindex="0" loading="lazy"><figcaption>2</figcaption></figure><h3 id="_2-2-多个对象内存图" tabindex="-1"><a class="header-anchor" href="#_2-2-多个对象内存图"><span>2.2 多个对象内存图</span></a></h3><ul><li>成员变量使用过程</li></ul><figure><img src="https://blog-codecnm-cn.oss-cn-chengdu.aliyuncs.com/blog/3.png" alt="3" tabindex="0" loading="lazy"><figcaption>3</figcaption></figure><ul><li>成员方法调用过程</li></ul><figure><img src="https://blog-codecnm-cn.oss-cn-chengdu.aliyuncs.com/blog/4.png" alt="4" tabindex="0" loading="lazy"><figcaption>4</figcaption></figure><ul><li><p>总结：</p><p>多个对象在堆内存中，都有不同的内存划分，成员变量存储在各自的内存区域中，成员方法多个对象共用的一份</p></li></ul><h2 id="_3-成员变量和局部变量" tabindex="-1"><a class="header-anchor" href="#_3-成员变量和局部变量"><span>3. 成员变量和局部变量</span></a></h2><h3 id="_3-1-成员变量和局部变量的区别" tabindex="-1"><a class="header-anchor" href="#_3-1-成员变量和局部变量的区别"><span>3.1 成员变量和局部变量的区别</span></a></h3><ul><li>类中位置不同：成员变量（类中方法外）局部变量（方法内部或方法声明上）</li><li>内存中位置不同：成员变量（堆内存）局部变量（栈内存）</li><li>生命周期不同：成员变量（随着对象的存在而存在，随着对象的消失而消失）局部变量（随着方法的调用而存在，醉着方法的调用完毕而消失）</li><li>初始化值不同：成员变量（有默认初始化值）局部变量（没有默认初始化值，必须先定义，赋值才能使用）</li></ul><h2 id="_4-封装" tabindex="-1"><a class="header-anchor" href="#_4-封装"><span>4. 封装</span></a></h2><h3 id="_4-1-封装思想" tabindex="-1"><a class="header-anchor" href="#_4-1-封装思想"><span>4.1 封装思想</span></a></h3><ol><li><p>封装概述 ==&gt;是面向对象三大特征之一（封装，继承，多态）<strong>对象代表什么，就得封装对应的数据，并提供数据对应的行为</strong></p></li><li><p>封装代码实现</p><p>将类的某些信息隐藏在类内部，不允许外部程序直接访问，而是通过该类提供的方法来实现对隐藏信息的操作和访问</p><p>成员变量private，提供对应的getXxx()/setXxx()方法</p></li></ol><blockquote><p><strong>封装的好处：</strong> 让编程变得很简单，有什么事，找对象，调方法就行。 降低我们的学习成本，可以少学、少记，或者说压根不用学，不用记对象有哪些方法，有需要时去找就行</p></blockquote><h3 id="_4-2-private关键字" tabindex="-1"><a class="header-anchor" href="#_4-2-private关键字"><span>4.2 private关键字</span></a></h3><p>private是一个修饰符，可以用来修饰成员（成员变量，成员方法）</p><ul><li><p>被private修饰的成员，只能在本类进行访问，针对private修饰的成员变量，如果需要被其他类使用，提供相应的操作</p><ul><li>提供“get变量名()”方法，用于获取成员变量的值，方法用public修饰</li><li>提供“set变量名(参数)”方法，用于设置成员变量的值，方法用public修饰</li></ul></li><li><p>示例代码：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">/*
    学生类
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token comment">//成员变量</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token comment">//提供get/set方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token operator">&lt;</span><span class="token number">0</span> <span class="token operator">||</span> a<span class="token operator">&gt;</span><span class="token number">120</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;你给的年龄有误&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            age <span class="token operator">=</span> a<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//成员方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span> <span class="token operator">+</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
    学生测试类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StudentDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//创建对象</span>
        <span class="token class-name">Student</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//给成员变量赋值</span>
        s<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;林青霞&quot;</span><span class="token punctuation">;</span>
        s<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//调用show方法</span>
        s<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_4-3-private的使用" tabindex="-1"><a class="header-anchor" href="#_4-3-private的使用"><span>4.3 private的使用</span></a></h3><ul><li><p>需求：定义标准的学生类，要求name和age使用private修饰，并提供set和get方法以及便于显示数据的show方法，测试类中创建对象并使用，最终控制台输出  林青霞，30</p></li><li><p>示例代码：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">/*
    学生类
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token comment">//成员变量</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token comment">//get/set方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        name <span class="token operator">=</span> n<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        age <span class="token operator">=</span> a<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span> <span class="token operator">+</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
    学生测试类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StudentDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//创建对象</span>
        <span class="token class-name">Student</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//使用set方法给成员变量赋值</span>
        s<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;林青霞&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        s<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        s<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//使用get方法获取成员变量的值</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;---&quot;</span> <span class="token operator">+</span> s<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span> <span class="token operator">+</span> s<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><blockquote><p><strong>总结：</strong></p><ol><li>private关键字是一个权限修饰符</li><li>可以修饰成员（成员变量和成员方法)</li><li>被private修饰的成员只能在本类中才能访问</li><li>针对private修饰的成员变量，如果需要被其他类使用，提供相应的操作</li><li>提供 setXxx(参数) 方法，用于给成员变量赋值，方法用public修饰</li><li>提供 getXxx() 方法，用于获取成员变量的值，方法用public修饰</li></ol></blockquote><h3 id="_4-4-this关键字" tabindex="-1"><a class="header-anchor" href="#_4-4-this关键字"><span>4.4 this关键字</span></a></h3><p>this修饰的变量用于指代成员变量，其主要作用是（区分局部变量和成员变量的重名问题）</p><ul><li>方法的形参如果与成员变量同名，不带this修饰的变量指的是形参，而不是成员变量</li><li>方法的形参没有与成员变量同名，不带this修饰的变量指的是成员变量</li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span> <span class="token operator">+</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>总结：</strong></p><ol><li><p>就近原则</p><ul><li>System.out.println(age);</li><li>System.out.println(this.age);</li></ul></li><li><p>this的作用？ ==&gt; 可以区别成员变量和局部变量</p></li><li><p>this的本质和内存图（扩展内容讲解）</p></li></ol></blockquote><h2 id="_5-构造方法" tabindex="-1"><a class="header-anchor" href="#_5-构造方法"><span>5. 构造方法</span></a></h2><h3 id="_5-1-构造方法概述" tabindex="-1"><a class="header-anchor" href="#_5-1-构造方法概述"><span>5.1 构造方法概述</span></a></h3><p>构造方法是一种特殊的方法，也叫构造器、构造函数</p><p>作用：在创建对象的时候给成员变量进行<mark>初始化</mark>的 <mark>就是给对象中的成员变量进行赋值的</mark></p><ul><li>作用：创建对象 Student stu = <strong>new Student();</strong></li><li>格式：</li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> 类名<span class="token punctuation">{</span>
	修饰符 类名<span class="token punctuation">(</span> 参数 <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>功能：主要是完成对象数据的初始化</li><li>示例代码：</li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token comment">//构造方法</span>
    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;无参构造方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span> <span class="token operator">+</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
    测试类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StudentDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//创建对象</span>
        <span class="token class-name">Student</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        s<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-构造方法的注意事项" tabindex="-1"><a class="header-anchor" href="#_5-2-构造方法的注意事项"><span>5.2 构造方法的注意事项</span></a></h3><ul><li><p>构造方法的创建</p><ul><li>如果没有定义构造方法，系统将给出一个默认的无参数构造方法</li><li>如果定义了构造方法，系统将不再提供默认的构造方法</li></ul></li><li><p>构造方法的重载</p><ul><li>如果自定义了带参构造方法，还要使用无参数构造方法，就必须再写一个无参数构造方法</li></ul></li><li><p>推荐的使用方式</p><ul><li>无论是否使用，都手工书写无参数构造方法</li></ul></li><li><p>**重要功能！ –&gt; ** <mark>可以使用带参构造，为成员变量进行初始化</mark></p></li></ul><h3 id="_5-3-构造方法的特点" tabindex="-1"><a class="header-anchor" href="#_5-3-构造方法的特点"><span>5.3 构造方法的特点</span></a></h3><ol><li>方法名与类名相同，大小写也要一致</li><li>没有返回值类型，没有void关键字</li><li>没有具体的返回值（不能由return带回结果数据）</li></ol><h3 id="_5-4-重要-构造方法的执行时机" tabindex="-1"><a class="header-anchor" href="#_5-4-重要-构造方法的执行时机"><span>5.4 （重要）构造方法的执行时机</span></a></h3><ol><li>是在创建对象的时候由虚拟机调用，不能手动调用构造方法</li><li>每创建一次对象，就会调用一次构造方法</li></ol><blockquote><p><strong>总结：</strong></p><ol><li><p>构造方法的作用?</p><p>创造对象的时候，由<mark>虚拟机自动调用</mark>，给成员变量进行初始化的。</p></li><li><p>构造方法有几种，各自的作用是什么?</p><p>无参数构造方法：初始化的对象时，成员变量的数据均采用默认值。</p><p>有参数构造方法：在初始化对象的时候，同时可以为对象进行赋值。</p></li><li><p>构造方法有哪些注意事项?</p><p>任何类定义出来，默认就自带了无参数构造器，写不写都有。</p><p>一旦定义了有参数构造器，无参数构造器就没有了，此时就需要自己写无参数构造器了。</p><p>建议在任何时候都手动写上空参和带全部参数的构造方法</p></li></ol></blockquote><blockquote><p><strong>注意:</strong></p><p><strong>构造方法存在的误区：构造方法就是用来创建对象的 <span style="color:red;">这句话是错误的！</span></strong></p><p><strong>构造方法真正的作用：在创造对象的时候，虚拟机会自动调用构造方法，<mark>作用是给成员变量进行初始化的</mark>。</strong></p></blockquote><ul><li>示例代码</li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">/*
    学生类
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span> <span class="token operator">+</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
    测试类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StudentDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//创建对象</span>
        <span class="token class-name">Student</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        s1<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//public Student(String name)</span>
        <span class="token class-name">Student</span> s2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;林青霞&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        s2<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//public Student(int age)</span>
        <span class="token class-name">Student</span> s3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        s3<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//public Student(String name,int age)</span>
        <span class="token class-name">Student</span> s4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;林青霞&quot;</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        s4<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-标准类制作" tabindex="-1"><a class="header-anchor" href="#_5-3-标准类制作"><span>5.3 标准类制作</span></a></h3><ol><li><p>类名需要见名知意</p></li><li><p>成员变量使用private修饰</p></li><li><p>提供至少两个构造方法（无参构造方法、带全部参数的构造方法）</p></li><li><p>get和set方法 ==&gt; 提供每一个成员变量对应的setXxx()/getXxx()</p></li><li><p>如果还有其他行为，也需要写上</p></li></ol><h3 id="_5-4-练习1" tabindex="-1"><a class="header-anchor" href="#_5-4-练习1"><span>5.4 练习1</span></a></h3><p>需求：定义标准学生类，要求分别使用空参和有参构造方法创建对象，空参创建的对象通过setXxx赋值，有参创建的对象直接赋值，并通过show方法展示数据。</p><ul><li>示例代码：</li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token comment">//成员变量</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token comment">//构造方法</span>
    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//成员方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span> <span class="token operator">+</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
    创建对象并为其成员变量赋值的两种方式
        1:无参构造方法创建对象后使用setXxx()赋值
        2:使用带参构造方法直接创建带有属性值的对象
*/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StudentDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//无参构造方法创建对象后使用setXxx()赋值</span>
        <span class="token class-name">Student</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        s1<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;林青霞&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        s1<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        s1<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//使用带参构造方法直接创建带有属性值的对象</span>
        <span class="token class-name">Student</span> s2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;林青霞&quot;</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        s2<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-练习2" tabindex="-1"><a class="header-anchor" href="#_5-4-练习2"><span>5.4 练习2</span></a></h3><figure><img src="https://blog-codecnm-cn.oss-cn-chengdu.aliyuncs.com/blog/111.jpg" alt="111" tabindex="0" loading="lazy"><figcaption>111</figcaption></figure><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token comment">//1.私有化全部的成员变量</span>
    <span class="token comment">//2.空参构造</span>
    <span class="token comment">//3.带全部参数的构造</span>
    <span class="token comment">//4.针对于每一个私有化的成员变量都要提供其对应的get和set方法</span>
    <span class="token comment">//5.如果当前事物还有其他行为，那么也要写出来，比如学生的吃饭，睡觉等行为</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> username<span class="token punctuation">;</span><span class="token comment">//用户名</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span><span class="token comment">//密码</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span><span class="token comment">//邮箱</span>
    <span class="token keyword">private</span> <span class="token keyword">char</span> gender<span class="token punctuation">;</span><span class="token comment">//性别</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span><span class="token comment">//年龄</span>

    <span class="token comment">//空参构造方法</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//带全部参数的构造</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token class-name">String</span> username<span class="token punctuation">,</span> <span class="token class-name">String</span> password<span class="token punctuation">,</span> <span class="token class-name">String</span> email<span class="token punctuation">,</span> <span class="token keyword">char</span> gender<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>username <span class="token operator">=</span> username<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>password <span class="token operator">=</span> password<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>email <span class="token operator">=</span> email<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>gender <span class="token operator">=</span> gender<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//get和set</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> username<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token class-name">String</span> username<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>username <span class="token operator">=</span> username<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getPassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> password<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token class-name">String</span> password<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>password <span class="token operator">=</span> password<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> email<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setEmail</span><span class="token punctuation">(</span><span class="token class-name">String</span> email<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>email <span class="token operator">=</span> email<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">char</span> <span class="token function">getGender</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> gender<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setGender</span><span class="token punctuation">(</span><span class="token keyword">char</span> gender<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>gender <span class="token operator">=</span> gender<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>username <span class="token operator">+</span> <span class="token string">&quot;在吃饭&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//写一个标准的javabean类</span>
        <span class="token comment">//咱们在课后只要能把这个标准的javabean能自己写出来，那么就表示今天的知识点就ok了</span>


        <span class="token comment">//利用空参构造创建对象</span>
        <span class="token class-name">User</span> u1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//如果利用空参创建对象，还想赋值只能用set方法赋值</span>
        u1<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        u1<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">&quot;1234qwer&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        u1<span class="token punctuation">.</span><span class="token function">setEmail</span><span class="token punctuation">(</span><span class="token string">&quot;itheima@itcast.cn&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        u1<span class="token punctuation">.</span><span class="token function">setGender</span><span class="token punctuation">(</span><span class="token char">&#39;男&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        u1<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//获取属性的值并打印</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>u1<span class="token punctuation">.</span><span class="token function">getUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;, &quot;</span> <span class="token operator">+</span> u1<span class="token punctuation">.</span><span class="token function">getPassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                           <span class="token operator">+</span> <span class="token string">&quot;, &quot;</span> <span class="token operator">+</span> u1<span class="token punctuation">.</span><span class="token function">getEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;, &quot;</span> <span class="token operator">+</span> u1<span class="token punctuation">.</span><span class="token function">getGender</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;, &quot;</span> <span class="token operator">+</span> u1<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        u1<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;=============================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//简单的办法</span>
        <span class="token comment">//利用带全部参数的构造来创建对象</span>
        <span class="token comment">//快捷键:ctrl + p</span>
        <span class="token class-name">User</span> u2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&quot;lisi&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;12345678&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;lisi@itcast.cn&quot;</span><span class="token punctuation">,</span><span class="token char">&#39;女&#39;</span><span class="token punctuation">,</span><span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>u2<span class="token punctuation">.</span><span class="token function">getUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;, &quot;</span> <span class="token operator">+</span> u2<span class="token punctuation">.</span><span class="token function">getPassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                           <span class="token operator">+</span> <span class="token string">&quot;, &quot;</span> <span class="token operator">+</span> u2<span class="token punctuation">.</span><span class="token function">getEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;, &quot;</span> <span class="token operator">+</span> u2<span class="token punctuation">.</span><span class="token function">getGender</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;, &quot;</span> <span class="token operator">+</span> u2<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        u2<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,92),c=[e];function l(o,i){return s(),a("div",null,c)}const d=n(t,[["render",l],["__file","day07-Java面向对象.html.vue"]]),r=JSON.parse(`{"path":"/article/JavaSE/day07-Java%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1.html","title":"07-Java面向对象","lang":"zh-CN","frontmatter":{"title":"07-Java面向对象","description":" 面向对象的一个介绍： 面向：拿、找 对象：能干活的东西 面向对象编程：拿东西过来做对应的事情 带着一些问题进行学习： 为什么要使用面向对象编程？ 面向对象编程到底学什么？ Java为什么要使用面向对象的方式来编程？ 我们要洗衣服时，就是用的洗衣机帮我们完成这件事情 我们要扫地时，可以找扫地机器人帮我们完成这件事事情 跟朋友聊天时，可以通过手机帮我们完...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/article/JavaSE/day07-Java%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1.html"}],["meta",{"property":"og:site_name","content":"小李の学习笔记 It's all done! "}],["meta",{"property":"og:title","content":"07-Java面向对象"}],["meta",{"property":"og:description","content":" 面向对象的一个介绍： 面向：拿、找 对象：能干活的东西 面向对象编程：拿东西过来做对应的事情 带着一些问题进行学习： 为什么要使用面向对象编程？ 面向对象编程到底学什么？ Java为什么要使用面向对象的方式来编程？ 我们要洗衣服时，就是用的洗衣机帮我们完成这件事情 我们要扫地时，可以找扫地机器人帮我们完成这件事事情 跟朋友聊天时，可以通过手机帮我们完..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://blog-codecnm-cn.oss-cn-chengdu.aliyuncs.com/blog/image-20231224225553701.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-17T09:47:07.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"07-Java面向对象"}],["meta",{"property":"article:author","content":"Mr.Lhr"}],["meta",{"property":"article:modified_time","content":"2024-03-17T09:47:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"07-Java面向对象\\",\\"image\\":[\\"https://blog-codecnm-cn.oss-cn-chengdu.aliyuncs.com/blog/image-20231224225553701.png\\",\\"https://blog-codecnm-cn.oss-cn-chengdu.aliyuncs.com/blog/image-20231224231307531.png\\",\\"https://blog-codecnm-cn.oss-cn-chengdu.aliyuncs.com/blog/1.png\\",\\"https://blog-codecnm-cn.oss-cn-chengdu.aliyuncs.com/blog/2.png\\",\\"https://blog-codecnm-cn.oss-cn-chengdu.aliyuncs.com/blog/3.png\\",\\"https://blog-codecnm-cn.oss-cn-chengdu.aliyuncs.com/blog/4.png\\",\\"https://blog-codecnm-cn.oss-cn-chengdu.aliyuncs.com/blog/111.jpg\\"],\\"dateModified\\":\\"2024-03-17T09:47:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Lhr\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"Java为什么要使用面向对象的方式来编程？","slug":"java为什么要使用面向对象的方式来编程","link":"#java为什么要使用面向对象的方式来编程","children":[]},{"level":2,"title":"在Java中面向对象到底学什么？","slug":"在java中面向对象到底学什么","link":"#在java中面向对象到底学什么","children":[]},{"level":2,"title":"1. 类和对象","slug":"_1-类和对象","link":"#_1-类和对象","children":[{"level":3,"title":"1.1 类和对象的理解","slug":"_1-1-类和对象的理解","link":"#_1-1-类和对象的理解","children":[]},{"level":3,"title":"1.2 类的定义","slug":"_1-2-类的定义","link":"#_1-2-类的定义","children":[]},{"level":3,"title":"1.3 对象的使用","slug":"_1-3-对象的使用","link":"#_1-3-对象的使用","children":[]},{"level":3,"title":"1.4 学生对象-练习","slug":"_1-4-学生对象-练习","link":"#_1-4-学生对象-练习","children":[]}]},{"level":2,"title":"2. 对象内存图","slug":"_2-对象内存图","link":"#_2-对象内存图","children":[{"level":3,"title":"2.1 单个对象内存图","slug":"_2-1-单个对象内存图","link":"#_2-1-单个对象内存图","children":[]},{"level":3,"title":"2.2 多个对象内存图","slug":"_2-2-多个对象内存图","link":"#_2-2-多个对象内存图","children":[]}]},{"level":2,"title":"3. 成员变量和局部变量","slug":"_3-成员变量和局部变量","link":"#_3-成员变量和局部变量","children":[{"level":3,"title":"3.1 成员变量和局部变量的区别","slug":"_3-1-成员变量和局部变量的区别","link":"#_3-1-成员变量和局部变量的区别","children":[]}]},{"level":2,"title":"4. 封装","slug":"_4-封装","link":"#_4-封装","children":[{"level":3,"title":"4.1 封装思想","slug":"_4-1-封装思想","link":"#_4-1-封装思想","children":[]},{"level":3,"title":"4.2 private关键字","slug":"_4-2-private关键字","link":"#_4-2-private关键字","children":[]},{"level":3,"title":"4.3 private的使用","slug":"_4-3-private的使用","link":"#_4-3-private的使用","children":[]},{"level":3,"title":"4.4 this关键字","slug":"_4-4-this关键字","link":"#_4-4-this关键字","children":[]}]},{"level":2,"title":"5. 构造方法","slug":"_5-构造方法","link":"#_5-构造方法","children":[{"level":3,"title":"5.1 构造方法概述","slug":"_5-1-构造方法概述","link":"#_5-1-构造方法概述","children":[]},{"level":3,"title":"5.2 构造方法的注意事项","slug":"_5-2-构造方法的注意事项","link":"#_5-2-构造方法的注意事项","children":[]},{"level":3,"title":"5.3 构造方法的特点","slug":"_5-3-构造方法的特点","link":"#_5-3-构造方法的特点","children":[]},{"level":3,"title":"5.4 （重要）构造方法的执行时机","slug":"_5-4-重要-构造方法的执行时机","link":"#_5-4-重要-构造方法的执行时机","children":[]},{"level":3,"title":"5.3 标准类制作","slug":"_5-3-标准类制作","link":"#_5-3-标准类制作","children":[]},{"level":3,"title":"5.4 练习1","slug":"_5-4-练习1","link":"#_5-4-练习1","children":[]},{"level":3,"title":"5.4 练习2","slug":"_5-4-练习2","link":"#_5-4-练习2","children":[]}]}],"git":{"createdTime":1710668827000,"updatedTime":1710668827000,"contributors":[{"name":"lihairui","email":"2698457486@qq.com","commits":1}]},"readingTime":{"minutes":13.22,"words":3965},"filePathRelative":"article/JavaSE/day07-Java面向对象.md","localizedDate":"2024年3月17日","excerpt":"<blockquote>\\n<p>面向对象的一个介绍：</p>\\n<p>面向：拿、找</p>\\n<p>对象：能干活的东西</p>\\n<p>面向对象编程：拿东西过来做对应的事情</p>\\n</blockquote>\\n<p>带着一些问题进行学习：</p>\\n<p>为什么要使用面向对象编程？</p>\\n<p>面向对象编程到底学什么？</p>\\n<h2>Java为什么要使用面向对象的方式来编程？</h2>\\n<p>我们要洗衣服时，就是用的洗衣机帮我们完成这件事情</p>\\n<p>我们要扫地时，可以找扫地机器人帮我们完成这件事事情</p>\\n<p>跟朋友聊天时，可以通过手机帮我们完成这件事情</p>\\n<p><strong>符合人类思维习惯，让编程更简单，更好理解</strong></p>","autoDesc":true}`);export{d as comp,r as data};
