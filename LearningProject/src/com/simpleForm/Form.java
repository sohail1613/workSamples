package com.simpleForm;

import javax.swing.*;
import java.awt.*;

public class Form extends JFrame {
    private JLabel heading;
    Font font = new Font("", Font.BOLD, 30);
    private JLabel mainPanel;
    private JLabel nameLabel, passwordLabel;
    private JTextField nameTextField;
    private JPasswordField passwordField;
    private JButton button1, button2;

    //constructor
    public Form(){
        super.setTitle("My First Form");
        super.setSize(500, 500);
        super.setLocation(800, 150);
        super.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); //it will close program automatically, as soon as we exit it
        this.formGUI();// calling formGUI method

        setVisible(true);
    }

    //this method will create GUI for Form
    public void formGUI(){
        this.setLayout(new BorderLayout());
        heading = new JLabel("First Form");
        heading.setFont(font);
        heading.setHorizontalAlignment(JLabel.CENTER);//this will set heading in centre
        this.add(heading, BorderLayout.NORTH);

        /**Now working on JPanel**/
        mainPanel = new JLabel();
        //setting layout for main panel
        mainPanel.setLayout(new GridLayout(3, 2));

        nameLabel = new JLabel("Enter name ");
        nameLabel.setFont(font);

        passwordLabel = new JLabel("Enter password ");

        passwordLabel.setFont(font);
        nameTextField = new JTextField();
        nameTextField.setFont(font);

        passwordField = new JPasswordField();
        passwordField.setFont(font);

        button1 = new JButton("Submit");
        button1.setFont(font);

        button2 = new JButton("Reset");
        button2.setFont(font);

        //now adding labels pattern vise
        mainPanel.add(nameLabel);
        mainPanel.add(nameTextField);

        mainPanel.add(passwordLabel);
        mainPanel.add(passwordField);

        mainPanel.add(button1);
        mainPanel.add(button2);

        this.add(mainPanel, BorderLayout.CENTER);
    }
}
