// Base class Notification (Interface)
class Notification {
    // Method to be implemented by subclasses
    sendNotification() {
        throw new Error('Method not implemented');
    }
}

// Implementation of NotificationSMS
class NotificationSMS extends Notification {
    sendNotification() {
        console.log('Sending ... SMS');
    }
}

// Implementation of NotificationPush
class NotificationPush extends Notification {
    sendNotification() {
        console.log('Sending ... Push');
    }
}

// Implementation of NotificationEmail
class NotificationEmail extends Notification {
    sendNotification() {
        console.log('Sending ... Email');
    }
}

// Factory class to create notifications
class NotificationFactory {
    // Static method to create instances based on the type
    static createNotification(type) {
        switch (type) {
            case 'SMS':
                return new NotificationSMS();
            case 'Push':
                return new NotificationPush();
            case 'Email':
                return new NotificationEmail();
            default:
                throw new Error('Unknown notification type');
        }
    }
}

// Main code to use notifications
const notificationType = 'SMS'; // Change to 'Push' or 'Email' to test other types
const notification = NotificationFactory.createNotification(notificationType);
notification.sendNotification();
