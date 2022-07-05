package com.threads;

public class Main {
    public static void main(String[] args) {
        Company company = new Company();
        Producer producer = new Producer(company); //passing company objects
        Consumer consumer = new Consumer(company); //passing company objects
        //to start both producer and consumer thread
        producer.start();
        consumer.start();
    }
}
