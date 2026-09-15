export  async function apiFetch(endpoint, options = {}) {
  const url = new URL(endpoint);

  if (options.params) {
    Object.keys(options.params).forEach((key) => {
      if (options.params[key] !== undefined && options.params[key] !== null) {
        url.searchParams.append(key, options.params[key]);
      }
    });
  }

  try {
    const response = await fetch(url.toString(), {
      method: options.method || "GET",
      headers: {
        accept: "application/json",
        ...options.headers,
      },
      ...options,
    });

    // بنجيب البيانات سواء الـ request نجح أو فشل عشان نقدر نقرا الـ error body لو موجود
    let data;
    try {
      data = await response.json();
    } catch (e) {
      console.error(`from api fetch ${e.message}`)
      data = null; // لو الـ response مش JSON (زي صفحة HTML خطأ مثلاً)
    }

    if (!response.ok) {
      // 1. لو السيرفر باعت رسالة خطأ صريحة في الـ Body (زي الـ message اللي جاية من الـ server)، هاتها فوراً!
      let errorMessage = data?.message || data?.error;

      // 2. لو مفيش رسالة في الـ Body، نرجع للرسائل الافتراضية حسب الـ Status
      if (!errorMessage) {
        switch (response.status) {
          case 401:
            errorMessage =
              "Unauthorized: Invalid credentials or unauthenticated request.";
            break;
          case 404:
            errorMessage =
              "Not Found: The requested resource or endpoint does not exist.";
            break;
          case 500:
          case 502:
          case 503:
            errorMessage =
              "Server Error: Servers are currently experiencing issues. Please try again later.";
            break;
          default:
            errorMessage = `Request failed with status code ${response.status}`;
        }
      }

      throw new Error(errorMessage);
    }

    return data;
  } catch (error) {
    if (error.name === "TypeError" && error.message === "Failed to fetch") {
      // eslint-disable-next-line
      throw new Error(
        "Network Error: Failed to connect to the server. Please check your internet connection.",
      );
    }

    throw error;
  }
}
