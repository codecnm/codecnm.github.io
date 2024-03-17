---
title: 07-Java面向对象
---

> 面向对象的一个介绍：
>
> 面向：拿、找
>
> 对象：能干活的东西
>
> 面向对象编程：拿东西过来做对应的事情

带着一些问题进行学习：

为什么要使用面向对象编程？

面向对象编程到底学什么？

## Java为什么要使用面向对象的方式来编程？

我们要洗衣服时，就是用的洗衣机帮我们完成这件事情

我们要扫地时，可以找扫地机器人帮我们完成这件事事情

跟朋友聊天时，可以通过手机帮我们完成这件事情

**符合人类思维习惯，让编程更简单，更好理解**

![image-20231224225553701](https://blog-codecnm-cn.oss-cn-chengdu.aliyuncs.com/blog/image-20231224225553701.png)

## 在Java中面向对象到底学什么？

1. 学习获取已有的对象并使用
2. 学习如何自己设计对象并使用 ==> 面向对象的语法



## 1. 类和对象

### 1.1 类和对象的理解

客观存在的事物皆为对象 ，所以我们也常常说万物皆对象。

* 类
  * 类的理解
    * 类是对现实生活中一类具有共同属性和行为的事物的抽象
    * 类是对象的数据类型，类是具有相同属性和行为的一组对象的集合
    * 简单理解：类就是对现实事物的一种描述
  * 类的组成
    * 属性：指事物的特征，例如：手机事物（品牌，价格，尺寸）
    * 行为：指事物能执行的操作，例如：手机事物（打电话，发短信）
* 类和对象的关系
  * 类：类是对现实生活中一类具有共同属性和行为的事物的抽象
  * 对象：是能够看得到摸的着的真实存在的实体
  * 简单理解：**类是对事物的一种描述，对象则为具体存在的事物**

### 1.2 类的定义

类的组成是由属性和行为两部分组成

* 属性：在类中通过成员变量来体现（类中方法外的变量）
* 行为：在类中通过成员方法来体现（和前面的方法相比去掉static关键字即可）

类的定义步骤：

①定义类

②编写类的成员变量

③编写类的成员方法

```java
public class 类名 {
	// 成员变量
	变量1的数据类型 变量1；
	变量2的数据类型 变量2;
	…
	// 成员方法
	方法1;
	方法2;	
}
```

示例代码：

```java
/*
    手机类：
        类名：
        手机(Phone)

        成员变量：
        品牌(brand)
        价格(price)

        成员方法：
        打电话(call)
        发短信(sendMessage)
 */
public class Phone {
    //成员变量
    String brand;
    int price;

    //成员方法
    public void call() {
        System.out.println("打电话");
    }

    public void sendMessage() {
        System.out.println("发短信");
    }
}

```

### 1.3 对象的使用

* 创建对象的格式：
  * 类名 对象名 = new 类名();
* 调用成员的格式：
  * 对象名.成员变量
  * 对象名.成员方法();
* 示例代码

```java
/*
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
 */
public class PhoneDemo {
    public static void main(String[] args) {
        //创建对象
        Phone p = new Phone();

        //使用成员变量
        System.out.println(p.brand);
        System.out.println(p.price);

        p.brand = "小米";
        p.price = 2999;

        System.out.println(p.brand);
        System.out.println(p.price);

        //使用成员方法
        p.call();
        p.sendMessage();
    }
}
```

### 1.4 学生对象-练习

* 需求：首先定义一个学生类，然后定义一个学生测试类，在学生测试类中通过对象完成成员变量和成员方法的使用
* 分析：
  * 成员变量：姓名，年龄…
  * 成员方法：学习，做作业…
* 示例代码：

```java
public class Student {
    //成员变量
    String name;
    int age;

    //成员方法
    public void study() {
        System.out.println("好好学习，天天向上");
    }

    public void doHomework() {
        System.out.println("键盘敲烂，月薪过万");
    }
}
/*
    学生测试类
 */
public class StudentDemo {
    public static void main(String[] args) {
        //创建对象
        Student s = new Student();

        //使用对象
        System.out.println(s.name + "," + s.age);

        s.name = "林青霞";
        s.age = 30;

        System.out.println(s.name + "," + s.age);

        s.study();
        s.doHomework();
    }
}
```

> 定义类的补充注意事项：
>
> 1. 类名首字母建议大写，需要见名知意，驼峰模式。
> 2. 一个Java文件中可以定义多个class类，且只能一个类是public修饰，而且public修饰的类名必须成为代码文件名。**实际开发中建议还是一个文件定义一个class类**
> 3. 成员变量的完整定义格式是：`修饰符 数据类型 变量名称 = 初始化值；`一般无需指定初始化值，因为其存在默认值。

基本类型和引用类型对象的默认值：

![image-20231224231307531](https://blog-codecnm-cn.oss-cn-chengdu.aliyuncs.com/blog/image-20231224231307531.png)

## 2. 对象内存图

### 2.1 单个对象内存图

* 成员变量使用过程

![1](https://blog-codecnm-cn.oss-cn-chengdu.aliyuncs.com/blog/1.png)

* 成员方法调用过程

![2](https://blog-codecnm-cn.oss-cn-chengdu.aliyuncs.com/blog/2.png)

### 2.2 多个对象内存图

* 成员变量使用过程

![3](https://blog-codecnm-cn.oss-cn-chengdu.aliyuncs.com/blog/3.png)

* 成员方法调用过程

![4](https://blog-codecnm-cn.oss-cn-chengdu.aliyuncs.com/blog/4.png)

* 总结：

  多个对象在堆内存中，都有不同的内存划分，成员变量存储在各自的内存区域中，成员方法多个对象共用的一份

## 3. 成员变量和局部变量

### 3.1 成员变量和局部变量的区别

* 类中位置不同：成员变量（类中方法外）局部变量（方法内部或方法声明上）
* 内存中位置不同：成员变量（堆内存）局部变量（栈内存）
* 生命周期不同：成员变量（随着对象的存在而存在，随着对象的消失而消失）局部变量（随着方法的调用而存在，醉着方法的调用完毕而消失）
* 初始化值不同：成员变量（有默认初始化值）局部变量（没有默认初始化值，必须先定义，赋值才能使用）

## 4. 封装

### 4.1 封装思想

1. 封装概述 ==>是面向对象三大特征之一（封装，继承，多态）**对象代表什么，就得封装对应的数据，并提供数据对应的行为** 

2. 封装代码实现

   将类的某些信息隐藏在类内部，不允许外部程序直接访问，而是通过该类提供的方法来实现对隐藏信息的操作和访问

   成员变量private，提供对应的getXxx()/setXxx()方法

> **封装的好处：**
> 让编程变得很简单，有什么事，找对象，调方法就行。
> 降低我们的学习成本，可以少学、少记，或者说压根不用学，不用记对象有哪些方法，有需要时去找就行

### 4.2 private关键字

private是一个修饰符，可以用来修饰成员（成员变量，成员方法）

* 被private修饰的成员，只能在本类进行访问，针对private修饰的成员变量，如果需要被其他类使用，提供相应的操作

  * 提供“get变量名()”方法，用于获取成员变量的值，方法用public修饰
  * 提供“set变量名(参数)”方法，用于设置成员变量的值，方法用public修饰

* 示例代码：

  ```java
  /*
      学生类
   */
  class Student {
      //成员变量
      String name;
      private int age;
  
      //提供get/set方法
      public void setAge(int a) {
          if(a<0 || a>120) {
              System.out.println("你给的年龄有误");
          } else {
              age = a;
          }
      }
  
      public int getAge() {
          return age;
      }
  
      //成员方法
      public void show() {
          System.out.println(name + "," + age);
      }
  }
  /*
      学生测试类
   */
  public class StudentDemo {
      public static void main(String[] args) {
          //创建对象
          Student s = new Student();
          //给成员变量赋值
          s.name = "林青霞";
          s.setAge(30);
          //调用show方法
          s.show();
      }
  }
  ```

### 4.3 private的使用

* 需求：定义标准的学生类，要求name和age使用private修饰，并提供set和get方法以及便于显示数据的show方法，测试类中创建对象并使用，最终控制台输出  林青霞，30 

* 示例代码：

  ```java
  /*
      学生类
   */
  class Student {
      //成员变量
      private String name;
      private int age;
  
      //get/set方法
      public void setName(String n) {
          name = n;
      }
  
      public String getName() {
          return name;
      }
  
      public void setAge(int a) {
          age = a;
      }
  
      public int getAge() {
          return age;
      }
  
      public void show() {
          System.out.println(name + "," + age);
      }
  }
  /*
      学生测试类
   */
  public class StudentDemo {
      public static void main(String[] args) {
          //创建对象
          Student s = new Student();
  
          //使用set方法给成员变量赋值
          s.setName("林青霞");
          s.setAge(30);
  
          s.show();
  
          //使用get方法获取成员变量的值
          System.out.println(s.getName() + "---" + s.getAge());
          System.out.println(s.getName() + "," + s.getAge());
  
      }
  }
  ```

> **总结：**
>
> 1. private关键字是一个权限修饰符
> 2. 可以修饰成员（成员变量和成员方法)
> 3. 被private修饰的成员只能在本类中才能访问
> 4. 针对private修饰的成员变量，如果需要被其他类使用，提供相应的操作
> 5. 提供 setXxx(参数) 方法，用于给成员变量赋值，方法用public修饰
> 6. 提供 getXxx() 方法，用于获取成员变量的值，方法用public修饰

### 4.4 this关键字

this修饰的变量用于指代成员变量，其主要作用是（区分局部变量和成员变量的重名问题）

* 方法的形参如果与成员变量同名，不带this修饰的变量指的是形参，而不是成员变量
* 方法的形参没有与成员变量同名，不带this修饰的变量指的是成员变量

```java
public class Student {
    private String name;
    private int age;

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getAge() {
        return age;
    }

    public void show() {
        System.out.println(name + "," + age);
    }
}
```

> **总结：**
>
> 1. 就近原则	
>    - System.out.println(age);
>    - System.out.println(this.age);
>
> 2. this的作用？ ==> 可以区别成员变量和局部变量
> 3. this的本质和内存图（扩展内容讲解）

## 5. 构造方法

### 5.1 构造方法概述

构造方法是一种特殊的方法，也叫构造器、构造函数

作用：在创建对象的时候给成员变量进行==初始化==的 ==就是给对象中的成员变量进行赋值的==

* 作用：创建对象 Student stu = **new Student();**
* 格式：

```java
public class 类名{
	修饰符 类名( 参数 ) {
    }
}
```

* 功能：主要是完成对象数据的初始化
* 示例代码：

```java
class Student {
    private String name;
    private int age;

    //构造方法
    public Student() {
        System.out.println("无参构造方法");
    }

    public void show() {
        System.out.println(name + "," + age);
    }
}
/*
    测试类
 */
public class StudentDemo {
    public static void main(String[] args) {
        //创建对象
        Student s = new Student();
        s.show();
    }
}
```

### 5.2 构造方法的注意事项

* 构造方法的创建
  * 如果没有定义构造方法，系统将给出一个默认的无参数构造方法
  * 如果定义了构造方法，系统将不再提供默认的构造方法


* 构造方法的重载
  * 如果自定义了带参构造方法，还要使用无参数构造方法，就必须再写一个无参数构造方法


* 推荐的使用方式
  * 无论是否使用，都手工书写无参数构造方法


* **重要功能！ –> ** ==可以使用带参构造，为成员变量进行初始化==

### 5.3 构造方法的特点

1. 方法名与类名相同，大小写也要一致
2. 没有返回值类型，没有void关键字
3. 没有具体的返回值（不能由return带回结果数据）

### 5.4 （重要）构造方法的执行时机

1. 是在创建对象的时候由虚拟机调用，不能手动调用构造方法
2. 每创建一次对象，就会调用一次构造方法

> **总结：**
>
> 1. 构造方法的作用?
>
>    创造对象的时候，由==虚拟机自动调用==，给成员变量进行初始化的。
>
> 2. 构造方法有几种，各自的作用是什么?
>
>    无参数构造方法：初始化的对象时，成员变量的数据均采用默认值。
>
>    有参数构造方法：在初始化对象的时候，同时可以为对象进行赋值。
>
> 3. 构造方法有哪些注意事项?
>
>    任何类定义出来，默认就自带了无参数构造器，写不写都有。
>
>    一旦定义了有参数构造器，无参数构造器就没有了，此时就需要自己写无参数构造器了。
>
>    建议在任何时候都手动写上空参和带全部参数的构造方法

> **注意:**
>
> **构造方法存在的误区：构造方法就是用来创建对象的 <span style="color: red">这句话是错误的！</span>**
>
> **构造方法真正的作用：在创造对象的时候，虚拟机会自动调用构造方法，==作用是给成员变量进行初始化的==。**

* 示例代码

```java
/*
    学生类
 */
class Student {
    private String name;
    private int age;

    public Student() {}

    public Student(String name) {
        this.name = name;
    }

    public Student(int age) {
        this.age = age;
    }

    public Student(String name,int age) {
        this.name = name;
        this.age = age;
    }

    public void show() {
        System.out.println(name + "," + age);
    }
}
/*
    测试类
 */
public class StudentDemo {
    public static void main(String[] args) {
        //创建对象
        Student s1 = new Student();
        s1.show();

        //public Student(String name)
        Student s2 = new Student("林青霞");
        s2.show();

        //public Student(int age)
        Student s3 = new Student(30);
        s3.show();

        //public Student(String name,int age)
        Student s4 = new Student("林青霞",30);
        s4.show();
    }
}
```

### 5.3 标准类制作

1. 类名需要见名知意

2. 成员变量使用private修饰

3. 提供至少两个构造方法（无参构造方法、带全部参数的构造方法）

4. get和set方法 ==> 提供每一个成员变量对应的setXxx()/getXxx()

5. 如果还有其他行为，也需要写上

### 5.4 练习1

需求：定义标准学生类，要求分别使用空参和有参构造方法创建对象，空参创建的对象通过setXxx赋值，有参创建的对象直接赋值，并通过show方法展示数据。 

* 示例代码：

```java
class Student {
    //成员变量
    private String name;
    private int age;

    //构造方法
    public Student() {
    }

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    //成员方法
    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getAge() {
        return age;
    }

    public void show() {
        System.out.println(name + "," + age);
    }
}
/*
    创建对象并为其成员变量赋值的两种方式
        1:无参构造方法创建对象后使用setXxx()赋值
        2:使用带参构造方法直接创建带有属性值的对象
*/
public class StudentDemo {
    public static void main(String[] args) {
        //无参构造方法创建对象后使用setXxx()赋值
        Student s1 = new Student();
        s1.setName("林青霞");
        s1.setAge(30);
        s1.show();

        //使用带参构造方法直接创建带有属性值的对象
        Student s2 = new Student("林青霞",30);
        s2.show();
    }
}
```

### 5.4 练习2

![111](https://blog-codecnm-cn.oss-cn-chengdu.aliyuncs.com/blog/111.jpg)

```java
public class User {
    //1.私有化全部的成员变量
    //2.空参构造
    //3.带全部参数的构造
    //4.针对于每一个私有化的成员变量都要提供其对应的get和set方法
    //5.如果当前事物还有其他行为，那么也要写出来，比如学生的吃饭，睡觉等行为

    private String username;//用户名
    private String password;//密码
    private String email;//邮箱
    private char gender;//性别
    private int age;//年龄

    //空参构造方法
    public User() {
    }

    //带全部参数的构造
    public User(String username, String password, String email, char gender, int age) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.gender = gender;
        this.age = age;
    }

    //get和set

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public char getGender() {
        return gender;
    }

    public void setGender(char gender) {
        this.gender = gender;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void eat(){
        System.out.println(username + "在吃饭");
    }
}

public class Test {
    public static void main(String[] args) {
        //写一个标准的javabean类
        //咱们在课后只要能把这个标准的javabean能自己写出来，那么就表示今天的知识点就ok了


        //利用空参构造创建对象
        User u1 = new User();
        //如果利用空参创建对象，还想赋值只能用set方法赋值
        u1.setUsername("zhangsan");
        u1.setPassword("1234qwer");
        u1.setEmail("itheima@itcast.cn");
        u1.setGender('男');
        u1.setAge(23);
        //获取属性的值并打印
        System.out.println(u1.getUsername() + ", " + u1.getPassword()
                           + ", " + u1.getEmail() + ", " + u1.getGender() + ", " + u1.getAge());
        u1.eat();

        System.out.println("=============================");

        //简单的办法
        //利用带全部参数的构造来创建对象
        //快捷键:ctrl + p
        User u2 = new User("lisi","12345678","lisi@itcast.cn",'女',24);
        System.out.println(u2.getUsername() + ", " + u2.getPassword()
                           + ", " + u2.getEmail() + ", " + u2.getGender() + ", " + u2.getAge());
        u2.eat();
    }
}
```

