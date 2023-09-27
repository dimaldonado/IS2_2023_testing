
import pytest
from is2_backend.lib.api.dbAPI import app
import json 

@pytest.fixture
def client():
    with app.test_client() as client:
        yield client



def test_invalid_password_login(client):
    #Test user
    test_user = {
        "name": "TestUser6",
        "email": "test6@example.com",
        "password": "testpassword",  
        "type_of_user": "user",
        "id": 1,
    }

    # Test data with incorrect password
    test_data = {
        "email": test_user["email"],
        "password": "incorrect_password",  # Use an incorrect password
    }

    # Send a POST request to the /login route
    response = client.post('/login', json=test_data)

    # Assertions for an invalid password
    assert response.status_code == 401
    data = json.loads(response.data)
    assert "error" in data
    assert data["error"] == "Contraseña incorrecta"