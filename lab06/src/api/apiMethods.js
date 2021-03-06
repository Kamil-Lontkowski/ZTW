function urlSearchParams(url = "", params = {}) {
  const result = new URL(url);
  result.search = new URLSearchParams(params).toString();

  return result.toString();
}

export async function postData(url = "", data = {}, params = {}) {
  url = urlSearchParams(url, params);
  debugger;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function patchData(url = "", data = {}, params = {}) {
  url = urlSearchParams(url, params);

  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export async function deleteData(url = "", params = {}) {
  url = urlSearchParams(url, params);

  const response = await fetch(url, {
    method: "DELETE",
  });
  //return response.json();
}
