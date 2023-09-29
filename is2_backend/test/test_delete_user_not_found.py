import sys, os
import pytest
from flask import Flask
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../lib/api')))
from dbAPI import app, db, User

@pytest.fixture
def client():
    with app.test_client() as client:
        yield client

def test_delete_user(client):


    response = client.delete('/users/nonexistinguser@test.com')
    print(f"Response status code: {response.status_code}")
    print(f"Response JSON data: {response.get_json()}")

    #Assert not
    assert response.status_code == 404


    #Verify response
    data = response.get_json()
    assert data['message'] == 'Usuario no encontrado'

    