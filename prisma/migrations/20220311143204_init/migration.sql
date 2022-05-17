-- CreateTable
CREATE TABLE `answers` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `answer` TEXT NOT NULL,
    `image` TEXT NULL,
    `verification_file` TEXT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `assign` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `patient_id` INTEGER NOT NULL,
    `doctor_id` INTEGER NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `coupons` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `coupon_name` VARCHAR(255) NOT NULL,
    `coupon_code` VARCHAR(255) NOT NULL,
    `discount` FLOAT NOT NULL DEFAULT 0,
    `start_date` DATE NOT NULL,
    `end_date` DATE NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT (0000-00-00 00:00:00),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fill_requests` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `patient_token` VARCHAR(255) NOT NULL,
    `request_id` VARCHAR(255) NOT NULL,
    `patient_first_name` VARCHAR(255) NULL,
    `patient_last_name` VARCHAR(255) NULL,
    `patient_dob` VARCHAR(255) NULL,
    `patient_gender` VARCHAR(255) NULL,
    `patient_payment_type` VARCHAR(255) NULL,
    `medication_name` TEXT NULL,
    `insurances` TEXT NULL,
    `otc_products` TEXT NULL,
    `quantity_dispensed` INTEGER NULL DEFAULT 0,
    `days_supply` INTEGER NULL DEFAULT 0,
    `prescribing_doctor` VARCHAR(255) NULL DEFAULT (0),
    `medication_sig` VARCHAR(255) NULL DEFAULT (0),
    `refill_number` INTEGER NULL DEFAULT 0,
    `is_refill` INTEGER NULL DEFAULT 0,
    `check_in` INTEGER NULL DEFAULT 0,
    `shipping_method` VARCHAR(255) NULL DEFAULT (0),
    `replacement_order` VARCHAR(255) NULL DEFAULT (0),
    `signature_confirmation` VARCHAR(255) NULL DEFAULT (0),
    `address_from_name` VARCHAR(255) NULL DEFAULT (0),
    `address_from_company` VARCHAR(255) NULL DEFAULT (0),
    `address_from_street1` VARCHAR(255) NULL DEFAULT (0),
    `address_from_street2` VARCHAR(255) NULL DEFAULT (0),
    `address_from_city` VARCHAR(255) NULL DEFAULT (0),
    `address_from_state` VARCHAR(255) NULL DEFAULT (0),
    `address_from_zip` VARCHAR(255) NULL DEFAULT (0),
    `address_from_country` VARCHAR(255) NULL DEFAULT (0),
    `address_from_phone` VARCHAR(255) NULL DEFAULT (0),
    `address_from_email` VARCHAR(255) NULL DEFAULT (0),
    `address_to_name` VARCHAR(255) NULL DEFAULT (0),
    `address_to_street1` VARCHAR(255) NULL DEFAULT (0),
    `address_to_company` VARCHAR(255) NULL DEFAULT (0),
    `address_to_street2` VARCHAR(255) NULL DEFAULT (0),
    `address_to_city` VARCHAR(255) NULL DEFAULT (0),
    `address_to_state` VARCHAR(255) NULL DEFAULT (0),
    `address_to_zip` VARCHAR(255) NULL DEFAULT (0),
    `address_to_country` VARCHAR(255) NULL DEFAULT (0),
    `address_to_phone` VARCHAR(255) NULL DEFAULT (0),
    `address_to_email` VARCHAR(255) NULL DEFAULT (0),
    `patient_known_allergies` VARCHAR(255) NULL DEFAULT (0),
    `patient_other_medications` VARCHAR(255) NULL DEFAULT (0),
    `patient_survey` TEXT NULL,
    `notes` VARCHAR(255) NULL DEFAULT (0),
    `metadata` VARCHAR(255) NULL DEFAULT (0),
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `messages` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `sender_id` INTEGER NOT NULL,
    `receiver_id` INTEGER NULL,
    `message` TEXT NULL,
    `image` TEXT NULL,
    `audio` TEXT NULL,
    `seen` BOOLEAN NOT NULL DEFAULT false,
    `is_support` TINYINT NOT NULL DEFAULT 0,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order_activity_logs` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `order_id` INTEGER NOT NULL,
    `description` TEXT NULL,
    `template_id` VARCHAR(255) NULL,
    `template_data` TEXT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `trupil_id` INTEGER NOT NULL,
    `answer_id` INTEGER NOT NULL,
    `address` TEXT NULL,
    `address2` TEXT NULL,
    `currency` VARCHAR(100) NULL,
    `city` VARCHAR(100) NULL,
    `state` VARCHAR(100) NULL,
    `zip_code` VARCHAR(100) NULL,
    `verification_file` VARCHAR(255) NULL,
    `doc_type` VARCHAR(255) NULL,
    `user_phone` VARCHAR(255) NULL,
    `is_shipping` INTEGER NULL DEFAULT 0,
    `quantity` INTEGER NOT NULL DEFAULT 1,
    `total_price` DECIMAL(15, 2) NOT NULL,
    `monthly_plan` BOOLEAN NOT NULL DEFAULT false,
    `payment_type` ENUM('Stripe', 'Paypal', 'Amazon') NOT NULL DEFAULT (Stripe),
    `is_coupon` BOOLEAN NOT NULL DEFAULT false,
    `status` ENUM('Pending', 'Confirm', 'Complete', 'Cancelled') NOT NULL DEFAULT (Pending),
    `status_change_date` DATE NULL,
    `due_today` DATE NULL,
    `affiliate_order_number` VARCHAR(50) NULL,
    `pharmacy_id` BIGINT NULL,
    `is_prescription` BOOLEAN NOT NULL DEFAULT false,
    `prescription_date` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `shipping_date` DATETIME(0) NULL,
    `prescription_expiry_date` DATETIME(0) NULL,
    `is_different_pharmacy` BOOLEAN NULL,
    `stripe_charge_id` VARCHAR(255) NULL,
    `is_paid` BOOLEAN NOT NULL DEFAULT false,
    `visit_id` VARCHAR(255) NULL,
    `is_concluded` BOOLEAN NOT NULL DEFAULT false,
    `tracking_number` VARCHAR(255) NULL,
    `tracking_url` VARCHAR(255) NULL,
    `stripe_subscription_id` VARCHAR(255) NULL,
    `stripe_customer_id` VARCHAR(100) NULL,
    `subscription_pause_date` DATE NULL,
    `lash_updates` BOOLEAN NULL,
    `gg_med_order_response` LONGTEXT NULL,
    `send_gg_order_date` DATE NULL,
    `refill_no` INTEGER NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `personal_access_tokens` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `tokenable_type` VARCHAR(255) NOT NULL,
    `tokenable_id` BIGINT UNSIGNED NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `token` VARCHAR(64) NOT NULL,
    `abilities` TEXT NULL,
    `last_used_at` TIMESTAMP(0) NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    UNIQUE INDEX `personal_access_tokens_token_unique`(`token`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `prescriptions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `masterId` INTEGER NOT NULL,
    `rxName` VARCHAR(255) NOT NULL,
    `rxStrength` VARCHAR(255) NOT NULL,
    `rxRefills` VARCHAR(255) NOT NULL,
    `rxQuantity` VARCHAR(255) NOT NULL,
    `rxId` VARCHAR(255) NOT NULL,
    `docName` VARCHAR(255) NOT NULL,
    `docNPI` VARCHAR(255) NOT NULL,
    `docAddress` VARCHAR(255) NOT NULL,
    `docPhone` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `images` TEXT NULL,
    `price` DECIMAL(15, 2) NOT NULL,
    `price_three_month` DECIMAL(15, 2) NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `questionnaires` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `is_puplished` BOOLEAN NOT NULL DEFAULT false,
    `author_id` INTEGER NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `questions` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `type` VARCHAR(255) NULL,
    `subtitle` TEXT NOT NULL,
    `image` VARCHAR(255) NOT NULL,
    `questionnaire_id` INTEGER NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `question_answers` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `question_id` INTEGER NOT NULL,
    `priority` INTEGER NOT NULL,
    `proceed_question` INTEGER NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `unique` BOOLEAN NOT NULL DEFAULT false,
    `checkout_id` INTEGER NOT NULL DEFAULT 0,
    `is_file` BOOLEAN NOT NULL DEFAULT false,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_cards` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `order_id` INTEGER NOT NULL,
    `card_no` TEXT NULL,
    `exp_month` TEXT NULL,
    `exp_year` TEXT NULL,
    `cvc` TEXT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_truepill` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL DEFAULT 0,
    `patient_token` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `role_id` INTEGER NOT NULL DEFAULT 1,
    `first_name` TEXT NOT NULL,
    `last_name` TEXT NULL,
    `email` VARCHAR(255) NULL,
    `password` VARCHAR(255) NULL,
    `phone_number` TEXT NULL,
    `profile_img` TEXT NULL,
    `dob` DATE NULL,
    `user_age` INTEGER NULL,
    `user_height` DECIMAL(15, 2) NULL,
    `user_weight` DECIMAL(15, 2) NULL,
    `height_type` BOOLEAN NULL,
    `weight_type` BOOLEAN NULL,
    `gender` VARCHAR(255) NULL,
    `address` TEXT NULL,
    `address2` TEXT NULL,
    `country` TEXT NULL,
    `city` TEXT NULL,
    `state` TEXT NULL,
    `zip_code` TEXT NULL,
    `verification_code` TEXT NULL,
    `otp` VARCHAR(100) NULL,
    `is_verified` INTEGER NULL DEFAULT 0,
    `is_active` INTEGER NOT NULL DEFAULT 0,
    `social_id` VARCHAR(255) NULL,
    `social_type` VARCHAR(255) NULL,
    `user_hash` VARCHAR(255) NULL,
    `ds_patient_id` VARCHAR(50) NULL,
    `job_id` VARCHAR(255) NULL,
    `mrn_no` VARCHAR(10) NULL,
    `deleted_at` TIMESTAMP(0) NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `sub_domain` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `users_sub_domain_key`(`sub_domain`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
