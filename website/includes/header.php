<?php
/* ----------------------------------------------------------------
   Common header & navigation
-----------------------------------------------------------------*/
require_once __DIR__ . '/config.php';          // ➊  added
if (!isset($page_title))       $page_title       = 'Animation X-Sheet';
if (!isset($page_description)) $page_description = 'Professional animation timing-sheet tool';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($page_title) ?></title>
    <meta name="description" content="<?= htmlspecialchars($page_description) ?>">
    <meta name="keywords" content="animation, timing sheet, x-sheet, exposure sheet, open source">
    <meta name="author" content="Animation X-Sheet">

    <!-- Open Graph & Twitter cards -->
    <meta property="og:title" content="<?= htmlspecialchars($page_title) ?>">
    <meta property="og:description" content="<?= htmlspecialchars($page_description) ?>">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://animationxsheet.com">
    <meta name="twitter:card" content="summary_large_image">

    <!-- Favicons -->
    <link rel="icon" type="image/x-icon" sizes="any" href="favicon.ico">
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">

    <!-- Styles -->
    <link rel="stylesheet" href="css/style.css">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>

<body>
    <header class="site-header">
        <nav class="navbar">
            <div class="nav-container">
                <div class="nav-brand">
                    <a href="index.php">
                        <span class="brand-icon">📋</span>
                        <span class="brand-text">Animation X-Sheet</span>
                    </a>
                </div>

                <div class="nav-menu" id="navMenu">
                    <a href="index.php"
                        class="nav-link <?= basename($_SERVER['PHP_SELF']) == 'index.php'       ? 'active' : '' ?>">Home</a>
                    <a href="how-to-use.php"
                        class="nav-link <?= basename($_SERVER['PHP_SELF']) == 'how-to-use.php'  ? 'active' : '' ?>">How to Use</a>
                    <a href="help.php"
                        class="nav-link <?= basename($_SERVER['PHP_SELF']) == 'help.php'        ? 'active' : '' ?>">Help</a>

                    <!-- ➋ changed: shows current version right in the menu -->
                    <a href="download.php"
                        class="nav-link <?= basename($_SERVER['PHP_SELF']) == 'download.php'   ? 'active' : '' ?>">
                        Download <?= AXS_VERSION ?>
                    </a>
                </div>

                <button class="nav-toggle" id="navToggle">
                    <span></span><span></span><span></span>
                </button>
            </div>
        </nav>
    </header>