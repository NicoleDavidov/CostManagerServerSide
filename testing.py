import requests
import sys

filename = input("filename=")
output = open(filename, "w")
sys.stdout = output

BASE_URL = "http://localhost:3000"

print("======== STARTING UNIT TESTS ========")

# ---------- /api/about ----------
print("\nTESTING /api/about")
try:
    url = f"{BASE_URL}/api/about"
    response = requests.get(url)
    print("URL:", url)
    print("Status Code:", response.status_code)
    print("Response:", response.json())
except Exception as e:
    print("ERROR:", e)


# ---------- /api/add ----------
print("\nTESTING /api/add (valid)")
try:
    url = f"{BASE_URL}/api/add"
    payload = {
        "userid": 123123,
        "description": "testing bread",
        "category": "food",
        "sum": 25,
        "day": 8,
        "month": 6,
        "year": 2025
    }
    response = requests.post(url, json=payload)
    print("URL:", url)
    print("Payload:", payload)
    print("Status Code:", response.status_code)
    print("Response:", response.json())
except Exception as e:
    print("ERROR:", e)


print("\nTESTING /api/add (missing fields)")
try:
    url = f"{BASE_URL}/api/add"
    payload = {
        "userid": 123123,
        "category": "food"
    }
    response = requests.post(url, json=payload)
    print("URL:", url)
    print("Payload:", payload)
    print("Status Code:", response.status_code)
    print("Response:", response.json())
except Exception as e:
    print("ERROR:", e)


# ---------- /api/report ----------
print("\nTESTING /api/report")
try:
    url = f"{BASE_URL}/api/report?id=123123&year=2025&month=6"
    response = requests.get(url)
    print("URL:", url)
    print("Status Code:", response.status_code)
    print("Response:", response.json())
except Exception as e:
    print("ERROR:", e)


print("\nTESTING /api/report (missing params)")
try:
    url = f"{BASE_URL}/api/report"
    response = requests.get(url)
    print("URL:", url)
    print("Status Code:", response.status_code)
    print("Response:", response.json())
except Exception as e:
    print("ERROR:", e)


# ---------- /api/users/:id ----------
print("\nTESTING /api/users/123123")
try:
    url = f"{BASE_URL}/api/users/123123"
    response = requests.get(url)
    print("URL:", url)
    print("Status Code:", response.status_code)
    print("Response:", response.json())
except Exception as e:
    print("ERROR:", e)

print("\n======== END OF TESTS ========")
output.close()
