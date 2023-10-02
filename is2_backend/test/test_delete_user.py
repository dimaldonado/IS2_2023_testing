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
    # Create a test user
    test_user = User(name="Test User", email="deleteuser2@test.com", password="password", type_of_user="user")


    with app.app_context():
        db.session.add(test_user)
        db.session.commit()

    response = client.delete('/users/deleteuser2@test.com')

    assert response.status_code == 200
    assert User.query.filter_by(email="deleteuser2@test.com").first() is None

    #Verify response
    data = response.get_json()
    assert data['message'] == 'Usuario eliminado'

    