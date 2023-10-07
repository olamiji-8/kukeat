const User = require("../models/checkoutModel");


const checkout = async (req, res) => {
    try {
        // Extract user input from the request body
        const { email, fullname, phoneNumber, address, city, state } = req.body;

        // Perform any necessary validation on the input data
        // For example, you can check if the email is in a valid format
        // You can also check if the phone number follows a specific format

        // Create a new user record in the database using the User model
        const newUser = new User({
            email,
            fullname,
            phoneNumber,
            address,
            city,
            state,
        });

        // Save the user record to the database
        await newUser.save();

        // Return a success response to the client
        res.status(200).json({ message: 'Order placed successfully!' });
    } catch (error) {
        // Handle any errors that occur during the process
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Export the checkout function to use it in your routes
module.exports = checkout;
