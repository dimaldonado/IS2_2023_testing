
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

def test_update_report_priority(client):
    # Sample report
    sample_report = Report(title='Test Report', description='Testing', urgency='Low')
    db.session.add(sample_report)
    db.session.commit()

    # update prio
    response = client.response = client.patch(f'/reports/{sample_report.id}/update_priority/High')

    # Check if status code is OK 
    assert response.status_code == 200

    # Check if message is correct
    data = response.get_json()
    assert data['message'] == 'Prioridad del reporte actualizado'

    # Assert in db the urgency is changed
    updated_report = Report.query.get(sample_report.id)
    assert updated_report.urgency == 'High' 