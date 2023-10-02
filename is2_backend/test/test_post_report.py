import pytest
import os, sys
from flask import Flask, jsonify
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../lib/api')))
from dbAPI import app, db, Report, User, Software  

# Client with nested session and rollback 
@pytest.fixture
def client():
    with app.test_client() as client:
        with app.app_context():
            db.session.begin_nested()  
            yield client
            db.session.rollback()  

# Unit test to post a report
def test_post_report(client):
    existing_user = User.query.filter_by(email='john@example.com').first()
    if existing_user:
        db.session.delete(existing_user)
    existing_dev = User.query.filter_by(email='jane@example.com').first()
    if existing_dev:
        db.session.delete(existing_dev)
    db.session.commit()
    #Create user, dev and software for report data
    user = User(name='John Doe', password="password", email='john@example.com', type_of_user='user')
    dev = User(name='Jane Smith', password="password", email='jane@example.com', type_of_user='dev')
    software = Software(name='Software Name')
    db.session.add(user)
    db.session.add(dev)
    db.session.add(software)
    db.session.commit()

    # Sample report data
    report_data = {
        'title': 'Test Report',
        'description': 'This is a test report',
        'user_id': user.id,
        'user_name': user.name,
        'user_email': user.email,
        'dev_id': dev.id,
        'dev_name': dev.name,
        'dev_email': dev.email,
        'software': software.id,
        'software_name': software.name,
        'urgency': 'High',
        'status': 'Open'
    }

    # POST requests with report_data
    response = client.post('/reports', json=report_data)

    # Check if status code is OK
    assert response.status_code == 200

    # Check if response message is ok
    data = response.get_json()
    assert data['message'] == 'Reporte creado'

    # Assert if the report is in the database
    created_report = Report.query.filter_by(title='Test Report').first()
    assert created_report is not None
