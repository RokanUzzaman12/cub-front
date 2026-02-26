export default function Error({ statusCode = 500, message = "Something went wrong.", error }) {
  return (
    <>
      <div className="error-page">
        <div className="error-box">
          <div className="error-icon">⚠️</div>
          <h1 className="error-title">Error {statusCode}</h1>
          <p className="error-message">{message}</p>
          {error && <pre className="error-details">{error.toString()}</pre>}
          <button className="error-button" onClick={() => window.location.reload()}>
            Reload Page
          </button>
        </div>
      </div>
      <style>
        {`
         .error-page {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f9fafb;
            padding: 20px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }

        .error-box {
            background-color: #fff;
            padding: 40px 30px;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
            text-align: center;
            max-width: 500px;
            width: 100%;
            }

        .error-icon {
            font-size: 48px;
            color: #f97316;
            margin-bottom: 20px;
            }

        .error-title {
            font-size: 32px;
            margin-bottom: 10px;
            color: #111827;
            }

        .error-message {
            font-size: 16px;
            color: #6b7280;
            margin-bottom: 20px;
            }

        .error-details {
            text-align: left;
            background-color: #fef2f2;
            color: #b91c1c;
            padding: 12px;
            border-radius: 8px;
            font-size: 14px;
            overflow-x: auto;
            margin-bottom: 20px;
            }

        .error-button {
            background-color: #ef4444;
            color: white;
            border: none;
            padding: 10px 20px;
            font-size: 15px;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            }

        .error-button:hover {
            background-color: #dc2626;
            }
            `}
      </style>
    </>
  );
}
