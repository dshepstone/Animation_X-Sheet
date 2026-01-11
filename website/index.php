<?php
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animation X-Sheet</title>
    <style>
        :root {
            color-scheme: light;
            font-family: "Segoe UI", "Helvetica Neue", Arial, sans-serif;
        }

        body {
            margin: 0;
            background: #0f172a;
            color: #e2e8f0;
        }

        .page {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 48px 20px;
        }

        .card {
            max-width: 720px;
            width: 100%;
            background: #111827;
            border-radius: 18px;
            padding: 36px 40px;
            box-shadow: 0 25px 60px rgba(15, 23, 42, 0.4);
        }

        h1 {
            font-size: 2.4rem;
            margin: 0 0 12px;
        }

        p {
            font-size: 1.05rem;
            line-height: 1.6;
            margin: 0 0 20px;
            color: #cbd5f5;
        }

        ul {
            margin: 0 0 24px;
            padding-left: 20px;
            color: #cbd5f5;
        }

        li {
            margin-bottom: 10px;
        }

        .actions {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
        }

        .button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 12px 20px;
            border-radius: 10px;
            background: #38bdf8;
            color: #0f172a;
            font-weight: 600;
            text-decoration: none;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .button:hover,
        .button:focus {
            transform: translateY(-1px);
            box-shadow: 0 10px 20px rgba(56, 189, 248, 0.35);
        }

        .helper {
            font-size: 0.95rem;
            margin-top: 16px;
            color: #94a3b8;
        }
    </style>
</head>
<body>
    <main class="page">
        <section class="card">
            <h1>Animation X-Sheet</h1>
            <p>
                Animation X-Sheet is a timing-sheet workspace built for planning shots, syncing audio,
                and organizing animation notes. Access the latest hosted application directly from the
                button below.
            </p>
            <ul>
                <li>Plan frames and timing notes in a focused workspace.</li>
                <li>Review audio playback while tracking cues and beats.</li>
                <li>Manage projects in the hosted application without downloading files.</li>
            </ul>
            <div class="actions">
                <a class="button" href="/app/index.html">Launch Animation X-Sheet</a>
            </div>
            <p class="helper">The application opens from <strong>/public_html/app/index.html</strong> on the host server.</p>
        </section>
    </main>
</body>
</html>
