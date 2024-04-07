const nodemailer = require('nodemailer');
require('dotenv').config();
const CartItem = require('../models/CartItem'); // Import CartItem model
const User = require('../models/checkoutModel');

// Controller to handle adding items to the cart
exports.checkout = async (req, res) => {
    try {
        const { email, fullname, phoneNumber, address, city, state, cartItems, sumTotal, serviceFee } = req.body;

        let user = await User.findOne({ $or: [{ email }, { phoneNumber }] });

        if (!user) {
            user = new User({ email, fullname, phoneNumber, address, city, state });
            await user.save();
        } else {
            user.fullname = fullname;
            user.address = address;
            user.city = city;
            user.state = state;
            user.phoneNumber = phoneNumber;
            user.cartItems = cartItems;
            user.sumTotal = sumTotal;
            user.serviceFee = serviceFee; 
            await user.save();
        }

        const cartitem = new CartItem({ userId: user._id, items: cartItems });
        await cartitem.save();

        sendCustomerEmail(email, fullname, cartItems, sumTotal, serviceFee);
        sendCEONotification(fullname, email, phoneNumber, cartItems, address, city, state, sumTotal, serviceFee);
        sendCONotification(fullname, email, phoneNumber, cartItems, address, city, state, sumTotal, serviceFee);

        res.status(200).json({ message: 'Checkout process initiated successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message || 'Server error' });
    }
};

// Function to format cart items into a nice string for email
const formatCartItems = (cartItems) => {
    let formattedItems = '';

    cartItems.forEach((item, index) => {
        formattedItems += `Item ${index + 1}:\n`;
        formattedItems += `Item Name: ${item.itemName}\n`;
        formattedItems += `Quantity: ${item.quantity}\n`;
        formattedItems += `Price: ${item.price}\n`;
        formattedItems += `Total Price: ${item.totalPrice}\n`;
        formattedItems += `Sum Total Price: ${item.sumTotal}\n\n`;
    });

    return formattedItems;
};

// Function to send email to the customer
const sendCustomerEmail = (email, fullname, cartItems, sumTotal, serviceFee) => {
    const transporter = nodemailer.createTransport({
        host: 'server119-1.web-hosting.com',
        port: 465,
        secure: true,
        auth: {
            user: 'info@kukeat.com',
            pass: process.env.EMAIL_PASSWORD
        }
    });

    let mailBody = `Dear ${fullname},<br/><br/>Thank you for your order. Here are the details of your purchase:<br/><br/>`;

    mailBody += formatCartItems(cartItems);

    mailBody += `Service Fee: ${serviceFee}<br/>`;
    mailBody += `Sum Total: ${sumTotal}<br/><br/>`;

    mailBody += 'Please let us know if you have any questions.<br/><br/>Best regards,';

    const mailOptions = {
        from: '"Kukeat" <info@kukeat.com>',
        to: email,
        subject: 'Thank you for your order!',
        html: mailBody
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email to customer:', error);
        } else {
            console.log('Email sent to customer:', info.response);
        }
    });
};

// Function to send notification to the CEO
const sendCEONotification = (fullname, email, phoneNumber, cartItems, address, city, state, sumTotal, serviceFee) => {
    // Construct the email message body with formatted cart items
    let mailBody = `New order received!\n\nCustomer Details:\nName: ${fullname}\nEmail: ${email}\nPhone Number: ${phoneNumber}\n\nDelivery Address:\n${address}\n${city}, ${state}\n\nOrdered Items:\n`;

    mailBody += formatCartItems(cartItems);

    mailBody += `Service Fee: ${serviceFee}<br/>`;
    mailBody += `Sum Total: ${sumTotal}<br/><br/>`;

    const transporter = nodemailer.createTransport({
        host: 'server119-1.web-hosting.com',
        port: 465,
        secure: true,
        auth: {
            user: 'info@kukeat.com',
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: '"Kukeat" <info@kukeat.com>',
        to: 'adetoromichael346@gmail.com', // Replace with CEO's email
        subject: 'New Order Notification',
        text: mailBody
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email notification to CEO:', error);
        } else {
            console.log('Email notification sent to CEO:', info.response);
        }
    });
};

// Function to send notification to the CO
const sendCONotification = (fullname, email, phoneNumber, cartItems, address, city, state, sumTotal, serviceFee) => {
    // Construct the email message body with formatted cart items
    let mailBody = `New order received!\n\nCustomer Details:\nName: ${fullname}\nEmail: ${email}\nPhone Number: ${phoneNumber}\n\nDelivery Address:\n${address}\n${city}, ${state}\n\nOrdered Items:\n`;

    mailBody += formatCartItems(cartItems);

    mailBody += `Service Fee: ${serviceFee}<br/>`;
    mailBody += `Sum Total: ${sumTotal}<br/><br/>`;

    const transporter = nodemailer.createTransport({
        host: 'server119-1.web-hosting.com',
        port: 465,
        secure: true,
        auth: {
            user: 'info@kukeat.com',
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: '"Kukeat" <info@kukeat.com>',
        to: 'olaleyedaniel076@gmail.com', // Replace with CO's email
        subject: 'New Order Notification',
        text: mailBody
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email notification to CO:', error);
        } else {
            console.log('Email notification sent to CO:', info.response);
        }
    });
};

// Controller to handle adding items to the cart
exports.addItemToCart = async (req, res) => {
    try {
        const { itemName, quantity, price, totalPrice, sumTotal } = req.body;

        // Create a new cart item
        const newItem = new CartItem({
            itemName,
            quantity,
            price,
            totalPrice,
            sumTotal
        });

        // Save the item to the database
        await newItem.save();

        res.status(201).json({ message: 'Item added to cart successfully', newItem });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message || 'Server error' });
    }
};
